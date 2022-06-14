import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLinkBreadcrumb } from '~components/PathBreadcrumbs'
import { NetworkSelect } from '~components/NetworkSelect'
import { useSelector } from 'react-redux'
import { serverSelectors } from '~store/types'
import { DNSView } from './components/DNSView'
import { DNSEntryCreate } from './components/DNSCreate'

export const DNS: React.FC = () => {
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  const hasDNS = useSelector(serverSelectors.getServerConfig).DNSMode

  useLinkBreadcrumb({
    title: t('breadcrumbs.dns'),
  })

  const titleStyle = {
    textAlign: 'center',
  } as any

  const DnsTitle = () => (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={5}>
        <div style={titleStyle}>
          <Typography variant="h5">
            {hasDNS ? t('dns.title') : t('dns.disabled')}
          </Typography>
        </div>
      </Grid>
    </Grid>
  )

  return (
    <Container>
      <Switch>
        <Route exact path={path}>
          <DnsTitle />
          {hasDNS && <NetworkSelect />}
        </Route>
        <Route path={`${path}/:netid/create`}>
          {!hasDNS ? <DnsTitle /> : <DNSEntryCreate />}
        </Route>
        <Route path={`${path}/:netid`}>
          {!hasDNS ? <DnsTitle /> : <DNSView />}
        </Route>
      </Switch>
    </Container>
  )
}
