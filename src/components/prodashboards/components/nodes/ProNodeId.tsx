import React from 'react'
import {
  Button,
  Grid,
  TextField,
  Switch as SwitchField,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  useRouteMatch,
  useHistory,
  useParams,
} from 'react-router-dom'
import { useLinkBreadcrumb } from '~components/PathBreadcrumbs'
import { datePickerConverter } from '~util/unixTime'
import { deleteNode } from '~modules/node/actions'
import CustomDialog from '~components/dialog/CustomDialog'
import { proSelectors } from '~store/selectors'
import { Node, nodeACLValues } from '~store/types'

export const ProNodeId: React.FC = () => {
  const { url } = useRouteMatch()
  const history = useHistory()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { netid, nodeid } = useParams<{ nodeid: string; netid: string }>()
  const userData = useSelector(proSelectors.networkUserData)[netid]
  let node : Node
  if (!!userData) {
    node = userData.nodes.filter(n => n.id === nodeid)[0]
  } else {
    node = {} as Node
  }
  const [open, setOpen] = React.useState(false)

  useLinkBreadcrumb({
    link: url,
    title: decodeURIComponent(nodeid),
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  if (!node || !node.id) {
    return <div>Not Found</div>
  }

  const handleDeleteNode = () => {
    dispatch(
      deleteNode.request({
        netid: node.network,
        nodeid: node.id,
      })
    )
    history.push(
      `/prouser/${netid}/nodeview`
    )
  }

  const rowMargin = {
    margin: '1em 0 1em 0',
  }
  const isIPDynamic = !node.isstatic

  return (
    <Grid container>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        handleAccept={handleDeleteNode}
        message={t('node.deleteconfirm')}
        title={`${t('common.delete')} ${node.name}`}
      />
      <Grid item xs={12}>
        <div style={{ textAlign: 'center', margin: '1em 0 1em 0' }}>
          <Typography variant="h5">
            {`${t('node.details')} : ${node.name}${
              node.ispending === 'yes' ? ` (${t('common.pending')})` : ''
            }`}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} sm={6} md={6} sx={rowMargin}>
        <div
          style={{
            display: 'flex',
            alignItems: 'space-between',
            justifyContent: 'center',
          }}
        > 
          <Button
            disabled={node.isserver}
            variant="outlined"
            color="warning"
            style={{ width: '50%', margin: '4px' }}
            onClick={handleOpen}
          >
            {t('common.delete')}
          </Button>
        </div>
      </Grid>
      <Grid item xs={6} sm={3} sx={rowMargin}></Grid>
      <Grid item xs={6} sm={3} sx={rowMargin}></Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.endpoint}
          label={String(t('node.endpoint'))}
        />
      </Grid>
      <Grid item xs={10} sm={4} md={3} sx={rowMargin}>
        <FormControlLabel
          label={String(t('node.isstatic'))}
          control={<SwitchField checked={isIPDynamic} disabled />}
          disabled
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.listenport}
          label={String(t('node.listenport'))}
        />
      </Grid>
      <Grid item xs={10} sm={4} md={3} sx={rowMargin}>
        <FormControlLabel
          label={String(t('node.udpholepunch'))}
          control={<SwitchField checked={node.udpholepunch} disabled />}
          disabled
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.address}
          label={String(t('node.address'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.address6}
          label={String(t('node.address6'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.localaddress}
          label={String(t('node.localaddress'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.name}
          label={String(t('node.name'))}
        />
      </Grid>

      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.publickey}
          label={String(t('node.publickey'))}
        />
      </Grid>

      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.postup}
          label={String(t('node.postup'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.postdown}
          label={String(t('node.postdown'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.allowedips ? node.allowedips.join(',') : ''}
          label={String(t('node.allowedips'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.persistentkeepalive}
          label={String(t('node.persistentkeepalive'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={datePickerConverter(node.lastmodified)}
          label={String(t('node.lastmodified'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={datePickerConverter(node.expdatetime)}
          label={String(t('node.expdatetime'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={datePickerConverter(node.lastcheckin)}
          label={String(t('node.lastcheckin'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.macaddress}
          label={String(t('node.macaddress'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={
            node.egressgatewayranges
              ? node.egressgatewayranges.join(',')
              : ''
          }
          label={String(t('node.egressgatewayranges'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.localrange}
          label={String(t('node.localrange'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField disabled value={node.os} label={String(t('node.os'))} />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.mtu}
          label={String(t('node.mtu'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.network}
          label={String(t('node.network'))}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} sx={rowMargin}>
        <TextField
          disabled
          value={node.defaultacl === undefined ? nodeACLValues.unset : 
            node.defaultacl ? nodeACLValues.allow : nodeACLValues.deny}
          label={String(t('node.defaultacl'))}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={10} sm={4} md={2} sx={rowMargin}>
            <FormControlLabel
              label={String(t('node.dnson'))}
              control={<SwitchField checked={node.dnson} disabled />}
              disabled
            />
          </Grid>
          <Grid item xs={10} sm={4} md={2} sx={rowMargin}>
            <FormControlLabel
              label={String(t('node.islocal'))}
              control={<SwitchField checked={node.islocal} disabled />}
              disabled
            />
          </Grid>
          <Grid item xs={10} sm={4} md={2} sx={rowMargin}>
            <FormControlLabel
              label={String(t('node.ishub'))}
              control={<SwitchField checked={node.ishub} disabled />}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
