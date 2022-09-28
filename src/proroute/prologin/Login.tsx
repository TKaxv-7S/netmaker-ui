import React, { useCallback, useEffect, useMemo } from 'react'
import { CircularProgress, Grid, Typography } from '@mui/material'
import { NmForm, NmFormInputText, validate } from '../form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { correctUserNameRegex, correctPasswordRegex } from '../../util/regex'
import { authSelectors, nodeSelectors } from '../../store/selectors'
import { login } from '../../store/modules/auth/actions'
import { Redirect, useLocation } from 'react-router'
import { useQuery } from '~util/query'
import { setShouldLogout } from '~store/modules/node/actions'

const styles = {
  centerText: {
    textAlign: 'center',
  },
  vertTabs: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  center: {
    flex: 1,
    display: 'flex',
    textAlign: 'center',
  },
} as any

export default function Login() {
  const dispatch = useDispatch()
  const isLogginIn = useSelector(authSelectors.isLogginIn)
  const isLoggedIn = useSelector(authSelectors.getLoggedIn)
  const authError = useSelector(authSelectors.getAuthError)
  const shouldSignOut = useSelector(nodeSelectors.getShouldSignOut)
  const { t } = useTranslation()
  const [error, setError] = React.useState('')
  const [triedToLogin, setTriedToLogin] = React.useState(false)
  const location = useLocation<{ from?: Location }>()
  const query = useQuery()

  const oauth = query.has('oauth') ? query.get('oauth') : ''
  const loginParam = query.has('login') ? query.get('login') : ''
  //   const user = query.has('user') ? query.get('user') : ''

  const initialLoginForm = { username: '', password: '' }

  useEffect(() => {
    if (shouldSignOut === 'auth') {
      setError(t('error.unauthorized'))
      dispatch(setShouldLogout(''))
      return
    }

    if (shouldSignOut === 'network') {
      setError(t('error.network'))
      dispatch(setShouldLogout(''))
      return
    }

    if (oauth) {
      setError(t('login.oauth.failed'))
      setTriedToLogin(true)
      return
    }

    if (authError) {
      setError(t('error.tokenexpire'))
      return
    }

    if (loginParam) {
      dispatch(login.success({ token: loginParam }))
    }

    if (!triedToLogin) {
      return
    }

    if (isLogginIn) {
      setError('')
    } else if (!isLoggedIn) {
      setError(t('login.loginFailed'))
    }
  }, [
    isLogginIn,
    isLoggedIn,
    triedToLogin,
    oauth,
    loginParam,
    dispatch,
    setError,
    t,
    authError,
    shouldSignOut,
  ])

  const loginValidation = useMemo(
    () =>
      validate<typeof initialLoginForm>({
        username: (username) =>
          !correctUserNameRegex.test(username)
            ? {
                message: t('login.validation.username'),
                type: 'value',
              }
            : undefined,
        password: (password) =>
          !correctPasswordRegex.test(password)
            ? {
                message: t('login.validation.password'),
                type: 'value',
              }
            : undefined,
      }),
    [t]
  )

  const loginSubmit = useCallback(
    (data: typeof initialLoginForm) => {
      dispatch(login.request(data))
      setTriedToLogin(true)
    },
    [dispatch, setTriedToLogin]
  )

  if (isLoggedIn) return <Redirect to={location.state?.from || '/'} />

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <div style={styles.centerText}>
          {error && (
            <Typography variant="h5" color="error">
              {error}
            </Typography>
          )}
          {isLogginIn && <CircularProgress />}
        </div>
      </Grid>
      <Grid item xs={12} style={styles.centerText}>
        <h3>{t('login.header')}</h3>
      </Grid>
      <Grid item xs={12}>
        <NmForm
          initialState={initialLoginForm}
          resolver={loginValidation}
          onSubmit={loginSubmit}
          submitText={t('login.login')}
          showOauth
          submitProps={{
            type: 'submit',
            fullWidth: true,
            variant: 'contained',
            color: 'primary',
            style: styles.vertTabs,
          }}
          disabled={isLogginIn}
        >
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item sm={12} md={5}>
              <NmFormInputText
                name={'username'}
                label={String(t('login.label.username'))}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="false"
                autoFocus
              />
            </Grid>
            <Grid item sm={12} md={5}>
              <NmFormInputText
                name={'password'}
                label={String(t('login.label.password'))}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder=""
                type="password"
                id="password"
                autoComplete="false"
              />
            </Grid>
          </Grid>
        </NmForm>
      </Grid>
    </Grid>
  )
}
