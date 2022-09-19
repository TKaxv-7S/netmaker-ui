import { LanguageResource } from '../type'

export const en: LanguageResource = {
  pro: {
    logs: 'Server Logs',
    refresh: 'Refresh',
    metrics: 'Metrics',
    admin: 'Admin',
    admintools: 'Admin Tools',
    nometrics: 'No Metrics Available',
    choose: 'Make Selection(s)',
    metrickeys: {
      latency: 'Latency (ms)',
      uptime: 'Uptime',
      totaltime: 'Duration',
      percentup: 'Percent UP',
      connected: 'Connected',
      totalsent: 'Total Sent',
      totalreceived: 'Total Received',
      syncmetrics: 'Refresh Metrics',
      lessthanone: '< 1',
      datasent: 'Data Sent',
      datareceived: 'Data Received',
      peerconnections: 'Peer Connections',
    },
    label: {
      usergroup: 'User Group',
      usergroups: 'User Groups',
      networkuser: 'Network User',
      networkusers: 'Network Users',
      selectnetwork: 'Select Network',
      welcome: 'Welcome ',
      welcomecard: 'Please click to continue',
      networknumber: 'Number of Networks available:',
      vpnaccess: 'Remote Access',
      clientconfig: 'Manage your client configuration',
      userpermissions: 'User Permissions',
    },
    networkusers: {
      none: 'No Network Users Found',
      deleteconfirm: 'Are you sure you want to remove this network user?',
      accesslevel: 'User Access Level',
      nodelimit: 'Node Limit',
      clientlimit: 'Client Limit',
      groups: 'User Groups',
      nodes: 'User Nodes',
      clients: 'User Ext. Clients',
    },
    network: {
      defaultaccesslevel: 'Default Access Level',
      defaultusernodelimit: 'Default User Node Limit',
      defaultuserclientlimit: 'Default User Client Limit',
      allowedusers: 'Allowed Users',
      allowedgroups: 'Allowed Groups',
      networkedit: 'Edit Network',
      managenetwork: 'Manage your network',
    },
    helpers: {
      accesslevel:
        ' 0 - NET ADMIN, 1 - NODE/REMOTE ACCESS, 2 - REMOTE ACCESS, 3 - NO_ACCESS',
      usernodelimit: 'The number of nodes a user may create on the network',
      userclientlimit:
        'Number of External Client configurations a user can create on a network if Ingress gateways present',
    },
  },
  header: {
    login: 'Login',
    logout: 'Logout',
    docs: 'Docs',
    networks: 'Networks',
    nodes: 'Nodes',
    accessKeys: 'Access Keys',
    dns: 'DNS',
    externalClients: 'External clients',
    users: 'Users',
    acls: 'ACLs',
  },
  acls: {
    acls: 'ACLs',
    nodes: 'Node ACLs',
    nodeview: 'View Node ACLs for',
    networkview: 'Viewing ACLs on network',
    aclicon: 'ACL Icon',
    nodeconfirm: 'Confirm Node ACL Change',
    nodesconfirm: 'Confirm Network ACL Change',
    viewall: 'View All Rules',
    allowall: 'Allow All',
    blockall: 'Block All',
    fullname: 'Access Control Lists',
  },
  accesskey: {
    accesskeys: 'Access Keys',
    accesskey: 'Access Key',
    create: 'Create an Access Key',
    delete: 'Delete Access Key',
    viewing: 'Viewing Access Keys for',
    usesremaining: 'Uses Remaining',
    none: 'No Access Keys Found',
    name: 'Name',
    uses: 'Uses',
    deleteconfirm: 'Are you sure you want to delete this access key?',
    details: 'Viewing your Access Key Details',
    accessToken: 'Access Token',
    installCommand: 'Linux, FreeBSD, Mac',
    dockerrun: 'Docker',
    windows: 'Windows (PowerShell Admin)',
    clientjoin: 'Client Join Commands',
    manual: 'Manual Install',
    joincommand: 'Join Command',
    clickinstall: 'View Netclient Install Instructions',
  },
  breadcrumbs: {
    home: 'Home',
    networks: 'Networks',
    nodes: 'Nodes',
    edit: 'Edit',
    accessKeys: 'Access Keys',
    extClients: 'Ext Clients',
    users: 'Users',
    dns: 'DNS',
    dashboard: 'Dashboard',
    createegress: 'Create Egress',
    createrelay: 'Create Relay',
    graphs: 'Graphs',
    acls: 'ACLs',
    userdashboard: 'User Dashboard',
    netadmindashboard: 'Network Administrator Dashboard',
    nodeuserdashboard: 'Node User Dashboard',
  },
  common: {
    disabled: 'Disabled',
    notFound: 'Not found',
    server: 'Server',
    version: 'Version',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    submit: 'Submit',
    reset: 'Reset',
    edit: 'Edit',
    create: 'Create',
    accept: 'Accept',
    view: 'View',
    autofill: 'Autofill',
    manage: 'Manage your',
    select: 'Select',
    name: 'Name',
    copy: 'Copy',
    selectall: 'Select All',
    count: 'Count',
    search: 'Search',
    pending: 'pending',
    cidr: 'Address Range (CIDR)',
    type: 'Type',
    max: 'Max',
    min: 'Min',
    chars: 'characters',
    lowercase: 'lowercase',
    optional: 'optional',
    submitchanges: 'Submit Changes',
    loading: 'Loading',
    confirmsubmit: 'Please confirm you want to submit these changes',
    disable: 'Disable',
    enable: 'Enable',
    togglelite: 'Use Light Mode',
    toggledark: 'Use Dark Mode',
    copytext: 'Copy',
    ascend: 'Sort Ascending',
    descend: 'Sort Descending ',
    sortby: 'Sort by',
    disconnected: 'Disconnected',
    clientsused: 'Clients Used:',
    clientsavailable: 'Clients Available:',
    connected: 'Connected',
  },
  dashboard: {
    title: 'Netmaker Dashboard',
  },
  dialog: {
    title: 'Please confirm',
    deleteNetwork: 'Are you sure you want to delete this network?',
    confirm: 'Continue',
    cancel: 'Cancel',
  },
  dns: {
    dns: 'DNS',
    create: 'Create DNS Entry',
    delete: 'Delete DNS Entry',
    viewing: 'Viewing DNS for',
    none: 'No Entries Found',
    entry: 'DNS Entry',
    deleteconfirm: 'Are you sure you want to remove this DNS Entry?',
    title: 'DNS',
    disabled: 'DNS is disabled',
    default: 'Default DNS Entries',
    custom: 'Custom DNS Entries',
    address: 'IP Address',
    name: 'DNS Name',
    nodeaddress: 'Node Address',
  },
  error: {
    notfound:
      'Looks like you have lost your way, Netmaker has a route for that!',
    noresults: 'No results found',
    network: 'Could not reach server',
    tokenexpire: 'Session has expired',
    unauthorized: 'Unauthorized access attempted',
    overload: 'Too many failed requests, refresh to retry',
  },
  extclient: {
    extclients: 'External Clients',
    extclient: 'Ext Client',
    create: 'Create Ext Client',
    disabled: 'You have reached your client limit',
    delete: 'Delete Ext Client',
    viewing: 'Viewing Ext Client',
    none: 'No Ext Clients Found',
    name: 'Name',
    deleteconfirm: 'Are you sure you want to delete this Ext. Client?',
    changeconfirm:
      'Are you sure you want to change access for this Ext. Client?',
    download: 'Download Client Configuration',
    viewqr: 'View Configuration QR',
    clientid: 'Client ID',
    qr: 'QR Code',
    edit: 'Change Ext Client Name',
    enabled: 'Enabled',
  },
  ingress: {
    none: 'No Ingress Gateways Found',
    add: 'Add External Client',
    name: 'Gateway Name',
    gateways: 'Gateways',
    clients: 'Clients',
    view: 'View Attached Clients?',
  },
  network: {
    allowmanualsignup: 'Allow Node Signup Without Keys',
    networks: 'Networks',
    network: 'Network',
    addressrange: 'Address Range (IPv4)',
    addressrange6: 'Address Range (IPv6)',
    localrange: 'Local Range',
    nodeslastmodified: 'Nodes Last Modified',
    networklastmodified: 'Network Last Modified',
    defaultinterface: 'Default Interface',
    defaultlistenport: 'Default Listen Port',
    defaultpostup: 'Default Postup',
    defaultpostdown: 'Default Postdown',
    defaultkeepalive: 'Default KeepAlive',
    checkininterval: 'Default Checkin Interval',
    defaultextclientdns: 'Default Ext Client DNS',
    defaultmtu: 'Default MTU',
    isdualstack: 'Is Dual Stack (IPv4 + IPv6)',
    ispointtosite: 'Is Point to Site',
    defaultsaveconfig: 'Default Saveconfig',
    accesskeys: 'Access Keys',
    defaultudpholepunch: 'UDP Hole Punching',
    defaultnatenabled: 'Enable NAT for egress traffic',
    islocal: 'Is Local Network',
    create: 'Create Network',
    netid: 'Network Name',
    deleteconfirm: 'Are you sure you want to delete this network?',
    refresh: 'Refresh public keys',
    details: 'Network Details',
    refreshconfirm:
      'Are you sure you want to reset the public & private key pairs of all nodes on the network?',
    graphs: 'Network Graphs',
    graphview: 'Viewing Network Graph',
    graph: 'Graph',
    commswarn:
      'Editing this network could cause your networks to lose consensus',
    none: 'No Network Selected',
    defaultacl: 'Default Access Control',
    isipv6: 'IPv6',
    isipv4: 'IPv4',
    validation: {
      ipv4: 'Please enter a valid IPv4 address',
      ipv6: 'Please enter a valid IPv6 address',
      accesslevel: 'Value must be Between 0 and 3 see tooltip for more info',
      nodelimit: 'Value must be 0 or greater',
      clientlimit: 'Value must be 0 or greater',
    },
  },
  helper: {
    egress: 'Enter your network interface name, i.e. "eth0"',
    egressiface: 'Find your interface on linux with "ip link show"',
    udpholepunching:
      'This can enhance connectivity in cases where NAT may block communication.',
    defaultnatenabled:
      "Enable NAT'ing if you wish traffic originating from your wireguard network to be source NAT'ed to the IP of the egess node",
    islocal: 'Use if server is on same network (LAN) as you',
    ispointtosite:
      'Create a network in which all clients have only one, central peer',
    defaultacl:
      "Indicates the default ACL value for a node when it joins in respect to it's peers (enabled or disabled)",
    ipv4: 'Adds private IPv4 to all nodes in a network',
    ipv6: 'Adds private IPv6 to all nodes in a network',
    whatisipv4: 'IPv4 address range',
    whatisipv6: 'IPv6 address range',
    localrange:
      'Specifies the local range that nodes will base their Endpoint off of',
    defaultinterface:
      'The default network interface name configured on each node. This defaults to “nm-<network name>”',
    defaultlistenport:
      'Default WireGuard port each node will attempt to use. Nodes will iterate up until they find a free port.',
    defaultpostup:
      'Default post-up command to run on each node (after interface has been configured). Disabled by default to prevent RCE vulnerabilities.',
    defaultpostdown:
      'Default post-down command to run on each node (after interface has been removed). Disabled by default to prevent RCE vulnerabilities.',
    keepalive:
      'How often nodes should send packets to keep connection alive with all peers (in seconds)',
    extclient:
      'If set, adds a “DNS=<value>” line to each ext client config. Set to add DNS to clients',
    mtu: 'Allows you to determine the biggest data size permitted on your connection, can be useful to set lower in certain difficult environments such as Kubernetes',
    nokeysignup:
      'Allows nodes to join the network without a valid Access Key, nodes will need to be approved by admin in UI',
    pointtosite:
      'Creates a network in which all clients have only one, central peer',
    defaultaccesscontrol:
      'If on all nodes can reach all other nodes by default, if off no node can reach all other nodes',
    dynamicendpoint:
      'When on, clients will first reach out to the server. The server will keep track of public addresses / ports and send these to all other clients in the network.',
    dynamicport:
      'If on the port is dynamically created, if off you set the port to any reasonable value you would like for your local machine',
    localaddress:
      'The “locally reachable” address of the node. Other nodes will take note of this to see if this node is on the same network. If so, they will use this address instead of the public “Endpoint” ',
    nodename:
      'The name of the node within the network. Hostname by default but can be anything (within the character limits)',
    publickey:
      '(Uneditable) The public key of the node, distributed to other peers in the network',
    nodepostup:
      'Uneditable by default to disable RCE. Commands to run after the interface is created. If an ingress or egress gateway are created, this field will populate automatically with appropriate iptables commands.',
    nodepostdown:
      'Uneditable by default to disable RCE. Commands to run after the interface is brought down. If an ingress or egress gateway are created, this field will populate automatically with appropriate iptables commands.',
    allowedips:
      'Additional private addresses given to the node (in addition to the IPAddress and IPv6Address).',
    persistentkeepalive:
      'How often packets are sent to keep connections open with other peers',
    relayaddress:
      'If “Relay” is enabled on this node, this field can be edited to add and remove nodes from the relay. So if you are currently relaying just one node but wish to relay an additional node, just add it’s private IP here',
    nodeexpires:
      'If a node should become invalid after a length of time, you can set it in this field, after which time, it will lose access to the network and will not populate to other nodes',
    lastcheckin:
      'Unix timestamp of the last time the node checked in with the server. Used to determine generic health of node',
    macaddress:
      'The hardware mac address of the machine. Used to be used as the unique ID, but is being deprecated',
    network: 'The network this node belongs too',
    egressrange:
      'If Egress is enabled, the gateway ranges that this machine routes to.',
    nodeos: 'The operating system of the node',
    nodelocalrange:
      'If IsLocal has been enabled on the network, this is the local range in which the node will look for a private address from the local interfaces, to use as an endpoint',
    isdnson: 'The node will setup DNS entries for its peers locally',
    networkhub:
      'On a point-to-site network, this node is the only one all peers connect to',
    nodeislocal:
      'If on, will only communicate over the local address (Assumes IsLocal turned to {yes} on the network level.)',
    isnodeconnected: 'If on, the node is connected to the network',
  },
  node: {
    nodes: 'Nodes',
    node: 'Node',
    id: 'ID',
    accesskey: 'Access Key',
    lastpeerupdate: 'Last Peer Update',
    keyupdatetimestamp: 'Key Update',
    checkininterval: 'Checkin Interval',
    ispending: 'Is Pending',
    action: 'Action',
    localrange: 'Local Range',
    isingressgateway: 'Is Ingress Gateway',
    isegressgateway: 'Is Egress Gateway',
    isrelay: 'Is a Relay Server',
    pullchanges: 'Pull Changes',
    dnson: 'Is DNS on',
    isdualstack: 'Dualstack (IPv6 Enabled)',
    ipforwarding: 'Ipforwarding',
    roaming: 'Roaming',
    islocal: 'Is Local',
    isserver: 'Is Server',
    ingressgatewayrange: 'Ingress Gateway Ranges (Comma Separated)',
    address: 'IP Address',
    address6: 'IPv6 Address',
    name: 'Node Name',
    listenport: 'Listen Port',
    publickey: 'Publickey',
    endpoint: 'Endpoint',
    expdatetime: 'Node Expiration Date/Time',
    postup: 'Postup ("; " separated)',
    postdown: 'Postdown ("; " separated)',
    persistentkeepalive: 'Persistent Keepalive',
    saveconfig: 'Saveconfig',
    interface: 'Interface',
    lastmodified: 'Last Modified',
    lastcheckin: 'Last Checkin',
    macaddress: 'Mac Address',
    network: 'Network',
    localaddress: 'Local Address',
    egressgatewayranges: 'Egress Gateway Ranges (Comma Separated)',
    allowedips: 'Allowed IPs (Comma Separated)',
    udpholepunch: 'Dynamic Port',
    isstatic: 'Dynamic Endpoint',
    mtu: 'MTU',
    relayaddrs: 'Relay Addresses (Comma Separated)',
    os: 'Node Operating System',
    status: 'Status',
    createegress: 'Create Egress Gateway',
    createingress: 'Create Ingress Gateway',
    createrelay: 'Make Relay',
    removeegress: 'Remove Egress Gateway',
    removeingress: 'Remove Ingress Gateway',
    removerelay: 'Remove Relay',
    statusegress: 'Egress Status',
    statusingress: 'Ingress Status',
    statusrelay: 'Relay Status',
    statushub: 'Is Network Hub',
    confirmegress: 'Are you sure you want to make an Egress Gateway?',
    confirmingress: 'Are you sure you want to make an Ingress Gateway?',
    confirmrelay: 'Are you sure you want to make a Relay Server?',
    deleteconfirm: 'Are you sure you want to delete this node?',
    choose: 'Select Node(s)',
    details: 'Node Details',
    sync: 'Sync Nodes with Server',
    pendingApproval: 'pending approval',
    approve: 'Approve',
    approveconfirm: 'Are you sure you want to grant access to this node?',
    none: 'No nodes found',
    isingressegress: 'Is Egress and Ingress',
    isingressegressrelay: 'Is Egress, Ingress & Relay',
    isegressrelay: 'Is Egress and Relay',
    isingressrelay: 'Is Ingress and Relay',
    isrelayed: 'Being Relayed',
    ishub: 'Is Network Hub',
    defaultacl: 'Node ACL Rule',
    onehub: 'This node is currently the hub',
    createhub: 'Make this node the hub',
    updatenode: 'Update Node',
    endpointenable: 'Endpoint is set dynamically',
    endpointdisable: 'Endpoint is set manually',
    healthy: 'Node has great connectivity',
    error: 'Node has no Connectivity',
    warning: 'Node has connectivity issues',
    connected: 'Node is connected to ',
    togglenode: 'Connected',
    validation: {
      relayaddress: 'Please enter a valid relay address range (IPv4 or IPv6)',
      egressgatewayrange:
        'Please enter a valid egress gateway range (IPv4 CIDR or IPv6 CIDR)',
    },
    state: {
      error: 'ERROR',
      warning: 'WARNING',
      normal: 'Normal',
      healthy: 'HEALTHY',
    },
    nodevisual: 'Nodes visually',
    version: 'Version',
    addresses: 'Addresses',
    udpdisabled: 'UDP hole punching is disabled on the network',
  },
  login: {
    validation: {
      username:
        'Invalid user name provided. Must be between 3 to 40 alphanumeric characters with "-" or "." or an email address.',
      password:
        'Invalid password provided. Must be between 5 to 64 characters with no white space.',
      confirmation: 'Confirmation password does not match given password.',
    },
    label: {
      username: 'Username',
      password: 'Password',
      confirmation: 'Password Confirmation',
    },
    oauth: {
      login: 'Use OAuth Provider to login.',
      failed: 'OAuth Login Failed, check if server is configured for OAuth.',
    },
    admin: {
      create: 'Create an Admin',
      creating: 'Create Admin',
    },
    header: 'Login below:',
    login: 'Login',
    loginFailed: 'Failed to login, invalid credentials or server disconnect.',
    logout: 'Logout',
  },
  users: {
    header: 'Users',
    delete: 'Delete User',
    edit: 'Edit User',
    details: 'View User Details',
    deleteTitle: 'Are you sure you want to delete this user?',
    networks: {
      create: 'Add a Network to User',
      delete: 'Remove a Network from User',
      edit: 'Edit User Networks',
    },
    label: {
      password: 'Password',
      confirmation: 'Confirm Password',
      username: 'Username',
    },
    validation: {
      username:
        'Invalid user name provided. Must be between 3 to 40 alphanumeric characters with "-" or "." or an email address.',
      password:
        'Invalid password provided. Must be between 5 to 64 characters with no white space.',
      confirmation: 'Confirmation password does not match given password.',
    },
    table: {
      name: 'Username',
      isAdmin: 'Is Admin',
      networks: 'Networks',
    },
    update: {
      header: 'Update',
      password: 'Change Password',
      passwordTitle: 'Change Password',
      passwordSubmit: 'Are you sure you want to change password?',
      adminSubmit: 'Update ( Make Admin )',
      submit: 'Update',
      isAdmin: 'Is Admin',
      networks: 'Select Networks for user',
      isAdminTitle: 'Create new Admin',
      createAdmin: 'Are you sure you want to make this user as admin?',
    },
    create: {
      button: 'Create User',
      isAdmin: 'Make Admin',
      networks: 'Networks',
      createAdmin: 'Are you sure you want to create an Admin?',
      isAdminTitle: 'Create new Admin',
    },
  },
  toast: {
    pending: 'Request pending',
    update: {
      success: {
        node: 'Node updated successfully!',
        extclient: 'Ext Client updated!',
        networkrefresh: 'Refreshed nodes public keys!',
        user: 'User Updated!',
        approve: 'Node Approved!',
        nodeacl: 'ACL Updated!',
        networkuser: 'Network User Updated!',
      },
      failure: {
        node: 'Node updated failed!',
        extclient: 'Ext Client update failed!',
        networkrefresh: 'Failed to refresh nodes public keys!',
        user: 'Failed to update user!',
        approve: 'Failed to approve node!',
        nodeacl: 'Failed to update ACL!',
        networkuser: 'Failed to update Network User!',
      },
    },
    create: {
      success: {
        accesskey: 'Succesfully created Access Key!',
        egress: 'Succesfully created Egress Gateway!',
        ingress: 'Successfully created Ingress Gateway!',
        relay: 'Successfully created Relay!',
        extclient: 'Sucessfully created an Ext Client!',
        dns: 'Successfully created DNS Entry!',
        user: 'Successfully created User!',
        admin: 'Successfully created new Admin!',
        usergroup: 'Successfully created new user group!',
      },
      failure: {
        accesskey: 'Failed to create Access Key.',
        egress: 'Failed to create Egress Gateway.',
        ingress: 'Failed to create Ingress Gateway.',
        relay: 'Failed to create Relay.',
        extclient: 'Failed to create an Ext Client',
        dns: 'Failed to create the DNS Entry.',
        user: 'Failed to create new User.',
        admin: 'Failed to create Admin.',
        usergroup: 'Failed to create new user group.',
      },
    },
    delete: {
      success: {
        accesskey: 'Succesfully removed Access Key!',
        egress: 'Succesfully removed Egress Gateway!',
        ingress: 'Successfully removed Ingress Gateway!',
        relay: 'Successfully removed Relay!',
        extclient: 'Successfully removed Ext Client!',
        dns: 'Successfully removed the DNS Entry!',
        user: 'Successfully deleted User!',
        node: 'Successfully deleted Node!',
        usergroups: 'Successfully deleted User Group!',
        networkuser: 'Successfully deleted Network User!',
      },
      failure: {
        accesskey: 'Failed to remove Access Key.',
        egress: 'Failed to remove Egress Gateway.',
        ingress: 'Failed to remove Ingress Gateway.',
        relay: 'Failed to remove Relay.',
        extclient: 'Failed to remove Ext Client.',
        dns: 'Failed to remove the DNS Entry.',
        user: 'Failed to remove User.',
        node: 'Failed to remove Node.',
        usergroups: 'Failed to remove User Group.',
        networkuser: 'Failed to remove Network User.',
      },
    },
    login: {
      success: 'Logged in successfully',
      failure: 'Failed to login',
    },
  },
}
