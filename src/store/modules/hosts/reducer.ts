import { produce } from 'immer'
import { createReducer } from 'typesafe-actions'
import { clearHosts, getHosts, updateHost, deleteHost, updateHostNetworks } from './actions'
import { Host } from '.'
import { call } from 'redux-saga/effects'

interface NodeCommonDetails {
  name: Host['name']
  version: Host['version']
  endpointip: Host['endpointip']
  publickey: Host['publickey']
  os: Host['os']
  listenport: Host['listenport']
  isstatic: Host['isstatic']
  localrange: Host['localrange']
  mtu: Host['mtu']
  interfaces: Host['interfaces']
}

export const reducer = createReducer({
  isProcessing: false,
  hosts: [] as Host[],
  hostsMap: {} as Record<string, NodeCommonDetails>,
})
  // reset store actions
  .handleAction(clearHosts, (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
      draftState.hosts = []
    })
  )

  // get hosts actions
  .handleAction(getHosts['request'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = true
    })
  )
  .handleAction(getHosts['success'], (state, payload) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
      
      const hosts = payload.payload

      // sort based on public key to maintain order in UI
      hosts.sort((a, b) => a.publickey.localeCompare(b.publickey))
      draftState.hosts = hosts

      // update hosts map
      hosts.forEach((host) => {
        draftState.hostsMap[host.id] = {
          name: host.name,
          version: host.version,
          endpointip: host.endpointip,
          os: host.os,
          publickey: host.publickey,
          listenport: host.listenport,
          isstatic: host.isstatic,
          localrange: host.localrange,
          mtu: host.mtu,
          interfaces: host.interfaces,
        }
      })
    })
  )
  .handleAction(getHosts['failure'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
    })
  )

  // update host actions
  .handleAction(updateHost['request'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = true
    })
  )
  .handleAction(updateHost['success'], (state, payload) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
      const newStateHosts: Host[] = JSON.parse(JSON.stringify(state.hosts))
      const updatedHostId = payload.payload.id
      newStateHosts.splice(
        newStateHosts.findIndex((host: Host) => host.id === updatedHostId),
        1,
        payload.payload
      )
      draftState.hosts = newStateHosts
    })
  )
  .handleAction(updateHost['failure'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
    })
  )

  // update host networks actions
  .handleAction(updateHostNetworks['request'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = true
    })
  )
  .handleAction(updateHostNetworks['success'], (state, payload) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
      // resfresh hosts
      call(getHosts['request'])
      // const newStateHosts: Host[] = JSON.parse(JSON.stringify(state.hosts))
      // const updatedHostId = payload.payload.hostid
      // newStateHosts.find((host: Host) => host.id === updatedHostId)!.nodes = payload.payload.networks
      // draftState.hosts = newStateHosts
    })
  )
  .handleAction(updateHostNetworks['failure'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
    })
  )

  // delete host actions
  .handleAction(deleteHost['request'], (state, _) =>
    produce(state, (draftState) => {
      draftState.isProcessing = true
    })
  )
  .handleAction(deleteHost['success'], (state, payload) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false

      const newState: Host[] = JSON.parse(JSON.stringify(state.hosts))
      const deletedHostId = payload.payload.id
      newState.splice(
        newState.findIndex((host: Host) => host.id === deletedHostId),
        1
      )
      draftState.hosts = newState
    })
  )
  .handleAction(deleteHost['failure'], (state, payload) =>
    produce(state, (draftState) => {
      draftState.isProcessing = false
    })
  )