import React, { useMemo, useCallback } from 'react'
import { NmLink } from '~components/index'
import { NmTable, TableColumns } from '~components/Table'
import { Node } from '~modules/node'
import { useTranslation } from 'react-i18next'
import {
  useRouteMatch,
  useParams,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom'
import { useLinkBreadcrumb } from '~components/PathBreadcrumbs'
import { useNetwork, useNodesByNetworkId } from '~util/network'
import { NodeId } from './nodeId/NodeId'
import {
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  AccountTree,
  AltRoute,
  CallMerge,
  CallSplit,
  Delete,
  Edit,
  Search,
  Sync,
} from '@mui/icons-material'
import { i18n } from '../../../i18n/i18n'
import { CreateEgress } from './components/CreateEgress'
import { TableToggleButton } from './components/TableToggleButton'
import { CreateRelay } from './components/CreateRelay'
import { NetworkSelect } from '../../../components/NetworkSelect'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNode, setNodeSort } from '~store/modules/node/actions'
import CustomizedDialogs from '~components/dialog/CustomDialog'
import { MultiCopy } from '~components/CopyText'
import { hostsSelectors, nodeSelectors, serverSelectors } from '~store/selectors'
import { Tablefilter } from '~components/filter/Tablefilter'
import { useEffect, useState } from 'react'
import { FailoverButton } from '../../../ee/nodes/FailoverButton'

type NetworkNodesTableData = Node & {
  name: string
  version: string
}

export const NetworkNodes: React.FC = () => {
  const { path, url } = useRouteMatch()
  const { t } = useTranslation()
  const { netid } = useParams<{ netid: string }>()
  const network = useNetwork(netid)
  // eslint-disable-next-line
  const listOfNodes = useNodesByNetworkId(netid) || []
  const nodeSort = useSelector(nodeSelectors.getNodeSort)
  const [filterNodes, setFilterNodes] = React.useState(listOfNodes)
  const [selected, setSelected] = React.useState({} as Node)
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  const serverConfig = useSelector(serverSelectors.getServerConfig)
  const hostsMap = useSelector(hostsSelectors.getHostsMap)
  const tableData: NetworkNodesTableData[] = useMemo(
    () =>
      filterNodes.map((node) => ({
        name: hostsMap[node.hostid]?.name ?? 'N/A',
        version: hostsMap[node.hostid]?.version ?? 'N/A',
        ...node,
      })),
    [hostsMap, filterNodes]
  )

  useEffect(() => {
    if (!searchTerm) {
      setFilterNodes(listOfNodes)
    } else {
      setFilterNodes(
        listOfNodes.filter((node) =>
          `${hostsMap[node.hostid]?.name ?? ''}${node.address}${node.network}`.includes(searchTerm)
        )
      )
    }
  }, [hostsMap, listOfNodes, searchTerm])

  const handleFilter = (event: { target: { value: string } }) => {
    const { value } = event.target
    const searchTerm = value.trim()
    setSearchTerm(searchTerm)
  }

  useLinkBreadcrumb({
    link: url,
    title: t('breadcrumbs.nodes'),
  })

  const syncNodes = () => {
    if (!!netid) {
      history.push(`/nodes/${netid}`)
    }
  }

  const handleEditDetails = useCallback(
    (node: Node) => {
      history.push(`/nodes/${node.network}/${encodeURIComponent(node.id)}/edit`)
    },
    [history]
  )

  const columns: TableColumns<NetworkNodesTableData> = useMemo(() => [
    {
      id: 'name',
      labelKey: 'node.name',
      minWidth: 100,
      sortable: true,
    },
    {
      id: 'address',
      labelKey: 'node.addresses',
      minWidth: 130,
      align: 'right',
      format: (_, node) => (
        <MultiCopy type="subtitle2" values={[node.address, node.address6]} />
      ),
    },
    {
      id: 'version',
      labelKey: 'node.version',
      minWidth: 50,
      align: 'center',
      format: (value, node) => <>{ hostsMap[node.hostid]?.version ?? 'N/A'}</>,
    },
    {
      id: 'network',
      labelKey: 'node.network',
      minWidth: 100,
      align: 'right',
      format: (value) => (
        <Tooltip
          disableTouchListener={true}
          title={`${t('node.connected') as string}${value}`}
          placement="top"
        >
          <NmLink sx={{ textTransform: 'none' }} to={`/networks/${value}`}>
            {value}
          </NmLink>
        </Tooltip>
      ),
    },
    {
      id: 'isegressgateway',
      labelKey: 'node.statusegress',
      minWidth: 30,
      align: 'center',
      format: (isegress, row) => (
        <TableToggleButton
          which="egress"
          isOn={isegress}
          node={row}
          createText={`${i18n.t('node.createegress')} : ${hostsMap[row.hostid]?.name ?? ''}`}
          removeText={`${i18n.t('node.removeegress')} : ${hostsMap[row.hostid]?.name ?? ''}`}
          SignalIcon={<CallSplit />}
          withHistory
        />
      ),
    },
    {
      id: 'isingressgateway',
      labelKey: 'node.statusingress',
      minWidth: 30,
      align: 'center',
      format: (isingress, row) => (
        <TableToggleButton
          which="ingress"
          isOn={isingress}
          node={row}
          createText={`${i18n.t('node.createingress')} : ${hostsMap[row.hostid]?.name ?? ''}`}
          removeText={`${i18n.t('node.removeingress')} : ${hostsMap[row.hostid]?.name ?? ''}`}
          SignalIcon={<CallMerge />}
        />
      ),
    },
    {
      id: 'isrelay',
      labelKey: 'node.statusrelay',
      minWidth: 30,
      align: 'center',
      format: (isrelay, row) => (
        <TableToggleButton
          which="relay"
          isOn={isrelay}
          node={row}
          createText={`${i18n.t('node.createrelay')} : ${hostsMap[row.hostid]?.name ?? ''}`}
          removeText={`${i18n.t('node.removerelay')} : ${hostsMap[row.hostid]?.name ?? ''}`}
          SignalIcon={<AltRoute />}
          withHistory
        />
      ),
    },
    {
      id: 'lastcheckin',
      labelKey: 'node.status',
      minWidth: 170,
      align: 'center',
      format: (lastcheckin) => {
        const time = Date.now() / 1000
        if (time - lastcheckin >= 1800)
          return (
            <Tooltip title={t('node.error') as string} placement="top">
              <Chip color="error" label="ERROR" />
            </Tooltip>
          )
        if (time - lastcheckin >= 300)
          return (
            <Tooltip title={t('node.warning') as string} placement="top">
              <Chip color="warning" label="WARNING" />
            </Tooltip>
          )
        return (
          <Tooltip title={t('node.healthy') as string} placement="top">
            <Chip color="success" label="HEALTHY" />
          </Tooltip>
        )
      },
    },
  ], [hostsMap, t])

  if (!listOfNodes || !!!network) {
    return <h5>Not found, data missing</h5>
  }

  if (serverConfig.IsEE) {
    const oldColumn = columns[columns.length - 1]
    columns[columns.length - 1] = {
      id: 'failover',
      labelKey: 'node.failover',
      minWidth: 30,
      align: 'center',
      format: (_, row) => (
        <FailoverButton
          node={row}
        />
      ),
    }
    columns.push(oldColumn)
  }

  const handleClose = () => {
    setSelected({} as Node)
  }

  const handleOpen = (node: Node) => {
    setSelected(node)
  }

  const handleDeleteNode = () => {
    if (!!selected.id) {
      dispatch(
        deleteNode.request({
          netid: selected.network,
          nodeid: selected.id,
        })
      )
      handleClose()
    }
  }

  const handleNodeSortSelect = (selection: string) => {
    if (
      selection === 'address' ||
      selection === 'network'
    ) {
      dispatch(
        setNodeSort({
          ...nodeSort,
          value: selection,
        })
      )
    }
  }

  return (
    <Switch>
      <Route exact path={path}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={12}>
            <Grid container justifyContent="space-around" alignItems="center">
              <Grid item xs={8} md={4}>
                <Typography variant="h4">
                  {`${netid} ${t('node.nodes')}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item xs={2} md={1}>
                    <Tooltip
                      title={`${t('network.graph')}`}
                      placement="top"
                      aria-label="view node graph"
                    >
                      <IconButton component={Link} to={`/graphs/${netid}`}>
                        <AccountTree />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={5} md={3}>
                    <Tablefilter
                      values={['address', 'name', 'network']}
                      ascending={nodeSort.ascending}
                      onSelect={handleNodeSortSelect}
                      onAscendClick={() => {
                        dispatch(
                          setNodeSort({
                            ...nodeSort,
                            ascending: !nodeSort.ascending,
                          })
                        )
                      }}
                      currentValue={nodeSort.value}
                    />
                  </Grid>
                  <Grid item xs={8} md={3}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                      label={`${t('common.search')} ${t('node.nodes')}`}
                      onChange={handleFilter}
                    />
                  </Grid>
                  <Grid item xs={7.5} md={3} paddingBottom="1rem">
                    <NetworkSelect selectAll />
                  </Grid>
                  <Grid item xs={1} md={1}>
                    <Tooltip title={t('node.sync') as string} placement="top">
                      <IconButton color="primary" onClick={syncNodes}>
                        <Sync />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <NmTable
          columns={columns}
          rows={tableData}
          actions={[
            (row) => ({
              tooltip: t('common.edit'),
              icon: <Edit />,
              onClick: () => {
                handleEditDetails(row)
              },
            }),
            (row) => ({
              tooltip: t('common.delete'),
              icon: <Delete />,
              onClick: () => {
                handleOpen(row)
              },
            }),
          ]}
          getRowId={(row) => row.id}
        />
        <CustomizedDialogs
          open={!!selected.id}
          handleClose={handleClose}
          handleAccept={handleDeleteNode}
          message={t('node.deleteconfirm')}
          title={`${t('common.delete')} ${hostsMap[selected.hostid]?.name ?? ''}`}
        />
      </Route>
      <Route
        path={`${path}/:nodeId/create-egress`}
        children={<CreateEgress />}
      />
      <Route path={`${path}/:nodeId/create-relay`} children={<CreateRelay />} />
      <Route path={`${path}/:nodeId`}>
        <NodeId />
      </Route>
    </Switch>
  )
}
