export interface paths {
  "/apis/apps/v1/": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description get available resources */
    get: operations["getAppsV1APIResources"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/controllerrevisions": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind ControllerRevision */
    get: operations["listAppsV1ControllerRevisionForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/daemonsets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind DaemonSet */
    get: operations["listAppsV1DaemonSetForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/deployments": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind Deployment */
    get: operations["listAppsV1DeploymentForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/controllerrevisions": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description list or watch objects of kind ControllerRevision */
    get: operations["listAppsV1NamespacedControllerRevision"]
    put?: never
    /** @description create a ControllerRevision */
    post: operations["createAppsV1NamespacedControllerRevision"]
    /** @description delete collection of ControllerRevision */
    delete: operations["deleteAppsV1CollectionNamespacedControllerRevision"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified ControllerRevision */
    get: operations["readAppsV1NamespacedControllerRevision"]
    /** @description replace the specified ControllerRevision */
    put: operations["replaceAppsV1NamespacedControllerRevision"]
    post?: never
    /** @description delete a ControllerRevision */
    delete: operations["deleteAppsV1NamespacedControllerRevision"]
    options?: never
    head?: never
    /** @description partially update the specified ControllerRevision */
    patch: operations["patchAppsV1NamespacedControllerRevision"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/daemonsets": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description list or watch objects of kind DaemonSet */
    get: operations["listAppsV1NamespacedDaemonSet"]
    put?: never
    /** @description create a DaemonSet */
    post: operations["createAppsV1NamespacedDaemonSet"]
    /** @description delete collection of DaemonSet */
    delete: operations["deleteAppsV1CollectionNamespacedDaemonSet"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified DaemonSet */
    get: operations["readAppsV1NamespacedDaemonSet"]
    /** @description replace the specified DaemonSet */
    put: operations["replaceAppsV1NamespacedDaemonSet"]
    post?: never
    /** @description delete a DaemonSet */
    delete: operations["deleteAppsV1NamespacedDaemonSet"]
    options?: never
    head?: never
    /** @description partially update the specified DaemonSet */
    patch: operations["patchAppsV1NamespacedDaemonSet"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified DaemonSet */
    get: operations["readAppsV1NamespacedDaemonSetStatus"]
    /** @description replace status of the specified DaemonSet */
    put: operations["replaceAppsV1NamespacedDaemonSetStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified DaemonSet */
    patch: operations["patchAppsV1NamespacedDaemonSetStatus"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/deployments": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description list or watch objects of kind Deployment */
    get: operations["listAppsV1NamespacedDeployment"]
    put?: never
    /** @description create a Deployment */
    post: operations["createAppsV1NamespacedDeployment"]
    /** @description delete collection of Deployment */
    delete: operations["deleteAppsV1CollectionNamespacedDeployment"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/deployments/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified Deployment */
    get: operations["readAppsV1NamespacedDeployment"]
    /** @description replace the specified Deployment */
    put: operations["replaceAppsV1NamespacedDeployment"]
    post?: never
    /** @description delete a Deployment */
    delete: operations["deleteAppsV1NamespacedDeployment"]
    options?: never
    head?: never
    /** @description partially update the specified Deployment */
    patch: operations["patchAppsV1NamespacedDeployment"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read scale of the specified Deployment */
    get: operations["readAppsV1NamespacedDeploymentScale"]
    /** @description replace scale of the specified Deployment */
    put: operations["replaceAppsV1NamespacedDeploymentScale"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update scale of the specified Deployment */
    patch: operations["patchAppsV1NamespacedDeploymentScale"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified Deployment */
    get: operations["readAppsV1NamespacedDeploymentStatus"]
    /** @description replace status of the specified Deployment */
    put: operations["replaceAppsV1NamespacedDeploymentStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified Deployment */
    patch: operations["patchAppsV1NamespacedDeploymentStatus"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/replicasets": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description list or watch objects of kind ReplicaSet */
    get: operations["listAppsV1NamespacedReplicaSet"]
    put?: never
    /** @description create a ReplicaSet */
    post: operations["createAppsV1NamespacedReplicaSet"]
    /** @description delete collection of ReplicaSet */
    delete: operations["deleteAppsV1CollectionNamespacedReplicaSet"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified ReplicaSet */
    get: operations["readAppsV1NamespacedReplicaSet"]
    /** @description replace the specified ReplicaSet */
    put: operations["replaceAppsV1NamespacedReplicaSet"]
    post?: never
    /** @description delete a ReplicaSet */
    delete: operations["deleteAppsV1NamespacedReplicaSet"]
    options?: never
    head?: never
    /** @description partially update the specified ReplicaSet */
    patch: operations["patchAppsV1NamespacedReplicaSet"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read scale of the specified ReplicaSet */
    get: operations["readAppsV1NamespacedReplicaSetScale"]
    /** @description replace scale of the specified ReplicaSet */
    put: operations["replaceAppsV1NamespacedReplicaSetScale"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update scale of the specified ReplicaSet */
    patch: operations["patchAppsV1NamespacedReplicaSetScale"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified ReplicaSet */
    get: operations["readAppsV1NamespacedReplicaSetStatus"]
    /** @description replace status of the specified ReplicaSet */
    put: operations["replaceAppsV1NamespacedReplicaSetStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified ReplicaSet */
    patch: operations["patchAppsV1NamespacedReplicaSetStatus"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/statefulsets": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description list or watch objects of kind StatefulSet */
    get: operations["listAppsV1NamespacedStatefulSet"]
    put?: never
    /** @description create a StatefulSet */
    post: operations["createAppsV1NamespacedStatefulSet"]
    /** @description delete collection of StatefulSet */
    delete: operations["deleteAppsV1CollectionNamespacedStatefulSet"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified StatefulSet */
    get: operations["readAppsV1NamespacedStatefulSet"]
    /** @description replace the specified StatefulSet */
    put: operations["replaceAppsV1NamespacedStatefulSet"]
    post?: never
    /** @description delete a StatefulSet */
    delete: operations["deleteAppsV1NamespacedStatefulSet"]
    options?: never
    head?: never
    /** @description partially update the specified StatefulSet */
    patch: operations["patchAppsV1NamespacedStatefulSet"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read scale of the specified StatefulSet */
    get: operations["readAppsV1NamespacedStatefulSetScale"]
    /** @description replace scale of the specified StatefulSet */
    put: operations["replaceAppsV1NamespacedStatefulSetScale"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update scale of the specified StatefulSet */
    patch: operations["patchAppsV1NamespacedStatefulSetScale"]
    trace?: never
  }
  "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified StatefulSet */
    get: operations["readAppsV1NamespacedStatefulSetStatus"]
    /** @description replace status of the specified StatefulSet */
    put: operations["replaceAppsV1NamespacedStatefulSetStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified StatefulSet */
    patch: operations["patchAppsV1NamespacedStatefulSetStatus"]
    trace?: never
  }
  "/apis/apps/v1/replicasets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind ReplicaSet */
    get: operations["listAppsV1ReplicaSetForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/statefulsets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind StatefulSet */
    get: operations["listAppsV1StatefulSetForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/controllerrevisions": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1ControllerRevisionListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/daemonsets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1DaemonSetListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/deployments": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1DeploymentListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1NamespacedControllerRevisionList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchAppsV1NamespacedControllerRevision"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1NamespacedDaemonSetList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchAppsV1NamespacedDaemonSet"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/deployments": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1NamespacedDeploymentList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchAppsV1NamespacedDeployment"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/replicasets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1NamespacedReplicaSetList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchAppsV1NamespacedReplicaSet"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1NamespacedStatefulSetList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchAppsV1NamespacedStatefulSet"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/replicasets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1ReplicaSetListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apps/v1/watch/statefulsets": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchAppsV1StatefulSetListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /** @description ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
    "io.k8s.api.apps.v1.ControllerRevision": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Data is the serialized representation of the state. */
      data?: components["schemas"]["io.k8s.apimachinery.pkg.runtime.RawExtension"]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * Format: int64
       * @description Revision indicates the revision of the state represented by Data.
       * @default 0
       */
      revision: number
    }
    /** @description ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
    "io.k8s.api.apps.v1.ControllerRevisionList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of ControllerRevisions */
      items: components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description DaemonSet represents the configuration of a daemon set. */
    "io.k8s.api.apps.v1.DaemonSet": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.apps.v1.DaemonSetSpec"]
      /**
       * @description The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.apps.v1.DaemonSetStatus"]
    }
    /** @description DaemonSetCondition describes the state of a DaemonSet at a certain point. */
    "io.k8s.api.apps.v1.DaemonSetCondition": {
      /** @description Last time the condition transitioned from one status to another. */
      lastTransitionTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description A human readable message indicating details about the transition. */
      message?: string
      /** @description The reason for the condition's last transition. */
      reason?: string
      /**
       * @description Status of the condition, one of True, False, Unknown.
       * @default
       */
      status: string
      /**
       * @description Type of DaemonSet condition.
       * @default
       */
      type: string
    }
    /** @description DaemonSetList is a collection of daemon sets. */
    "io.k8s.api.apps.v1.DaemonSetList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description A list of daemon sets. */
      items: components["schemas"]["io.k8s.api.apps.v1.DaemonSet"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description DaemonSetSpec is the specification of a daemon set. */
    "io.k8s.api.apps.v1.DaemonSetSpec": {
      /**
       * Format: int32
       * @description The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
       */
      minReadySeconds?: number
      /**
       * Format: int32
       * @description The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
       */
      revisionHistoryLimit?: number
      /** @description A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
      selector: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /**
       * @description An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). The only allowed template.spec.restartPolicy value is "Always". More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
       * @default {}
       */
      template: components["schemas"]["io.k8s.api.core.v1.PodTemplateSpec"]
      /**
       * @description An update strategy to replace existing DaemonSet pods with new pods.
       * @default {}
       */
      updateStrategy: components["schemas"]["io.k8s.api.apps.v1.DaemonSetUpdateStrategy"]
    }
    /** @description DaemonSetStatus represents the current status of a daemon set. */
    "io.k8s.api.apps.v1.DaemonSetStatus": {
      /**
       * Format: int32
       * @description Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
       */
      collisionCount?: number
      /** @description Represents the latest available observations of a DaemonSet's current state. */
      conditions?: components["schemas"]["io.k8s.api.apps.v1.DaemonSetCondition"][]
      /**
       * Format: int32
       * @description The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
       * @default 0
       */
      currentNumberScheduled: number
      /**
       * Format: int32
       * @description The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
       * @default 0
       */
      desiredNumberScheduled: number
      /**
       * Format: int32
       * @description The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
       */
      numberAvailable?: number
      /**
       * Format: int32
       * @description The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
       * @default 0
       */
      numberMisscheduled: number
      /**
       * Format: int32
       * @description numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
       * @default 0
       */
      numberReady: number
      /**
       * Format: int32
       * @description The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
       */
      numberUnavailable?: number
      /**
       * Format: int64
       * @description The most recent generation observed by the daemon set controller.
       */
      observedGeneration?: number
      /**
       * Format: int32
       * @description The total number of nodes that are running updated daemon pod
       */
      updatedNumberScheduled?: number
    }
    /** @description DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
    "io.k8s.api.apps.v1.DaemonSetUpdateStrategy": {
      /** @description Rolling update config params. Present only if type = "RollingUpdate". */
      rollingUpdate?: components["schemas"]["io.k8s.api.apps.v1.RollingUpdateDaemonSet"]
      /**
       * @description Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
       *
       *     Possible enum values:
       *      - `"OnDelete"` Replace the old daemons only when it's killed
       *      - `"RollingUpdate"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
       * @enum {string}
       */
      type?: "OnDelete" | "RollingUpdate"
    }
    /** @description Deployment enables declarative updates for Pods and ReplicaSets. */
    "io.k8s.api.apps.v1.Deployment": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Specification of the desired behavior of the Deployment.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.apps.v1.DeploymentSpec"]
      /**
       * @description Most recently observed status of the Deployment.
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.apps.v1.DeploymentStatus"]
    }
    /** @description DeploymentCondition describes the state of a deployment at a certain point. */
    "io.k8s.api.apps.v1.DeploymentCondition": {
      /** @description Last time the condition transitioned from one status to another. */
      lastTransitionTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description The last time this condition was updated. */
      lastUpdateTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description A human readable message indicating details about the transition. */
      message?: string
      /** @description The reason for the condition's last transition. */
      reason?: string
      /**
       * @description Status of the condition, one of True, False, Unknown.
       * @default
       */
      status: string
      /**
       * @description Type of deployment condition.
       * @default
       */
      type: string
    }
    /** @description DeploymentList is a list of Deployments. */
    "io.k8s.api.apps.v1.DeploymentList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of Deployments. */
      items: components["schemas"]["io.k8s.api.apps.v1.Deployment"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata.
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description DeploymentSpec is the specification of the desired behavior of the Deployment. */
    "io.k8s.api.apps.v1.DeploymentSpec": {
      /**
       * Format: int32
       * @description Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
       */
      minReadySeconds?: number
      /** @description Indicates that the deployment is paused. */
      paused?: boolean
      /**
       * Format: int32
       * @description The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
       */
      progressDeadlineSeconds?: number
      /**
       * Format: int32
       * @description Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
       */
      replicas?: number
      /**
       * Format: int32
       * @description The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
       */
      revisionHistoryLimit?: number
      /** @description Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels. */
      selector: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /**
       * @description The deployment strategy to use to replace existing pods with new ones.
       * @default {}
       */
      strategy: components["schemas"]["io.k8s.api.apps.v1.DeploymentStrategy"]
      /**
       * @description Template describes the pods that will be created. The only allowed template.spec.restartPolicy value is "Always".
       * @default {}
       */
      template: components["schemas"]["io.k8s.api.core.v1.PodTemplateSpec"]
    }
    /** @description DeploymentStatus is the most recently observed status of the Deployment. */
    "io.k8s.api.apps.v1.DeploymentStatus": {
      /**
       * Format: int32
       * @description Total number of available non-terminating pods (ready for at least minReadySeconds) targeted by this deployment.
       */
      availableReplicas?: number
      /**
       * Format: int32
       * @description Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
       */
      collisionCount?: number
      /** @description Represents the latest available observations of a deployment's current state. */
      conditions?: components["schemas"]["io.k8s.api.apps.v1.DeploymentCondition"][]
      /**
       * Format: int64
       * @description The generation observed by the deployment controller.
       */
      observedGeneration?: number
      /**
       * Format: int32
       * @description Total number of non-terminating pods targeted by this Deployment with a Ready Condition.
       */
      readyReplicas?: number
      /**
       * Format: int32
       * @description Total number of non-terminating pods targeted by this deployment (their labels match the selector).
       */
      replicas?: number
      /**
       * Format: int32
       * @description Total number of terminating pods targeted by this deployment. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.
       *
       *     This is an alpha field. Enable DeploymentReplicaSetTerminatingReplicas to be able to use this field.
       */
      terminatingReplicas?: number
      /**
       * Format: int32
       * @description Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
       */
      unavailableReplicas?: number
      /**
       * Format: int32
       * @description Total number of non-terminating pods targeted by this deployment that have the desired template spec.
       */
      updatedReplicas?: number
    }
    /** @description DeploymentStrategy describes how to replace existing pods with new ones. */
    "io.k8s.api.apps.v1.DeploymentStrategy": {
      /** @description Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
      rollingUpdate?: components["schemas"]["io.k8s.api.apps.v1.RollingUpdateDeployment"]
      /**
       * @description Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
       *
       *     Possible enum values:
       *      - `"Recreate"` Kill all existing pods before creating new ones.
       *      - `"RollingUpdate"` Replace the old ReplicaSets by new one using rolling update i.e gradually scale down the old ReplicaSets and scale up the new one.
       * @enum {string}
       */
      type?: "Recreate" | "RollingUpdate"
    }
    /** @description ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
    "io.k8s.api.apps.v1.ReplicaSet": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.apps.v1.ReplicaSetSpec"]
      /**
       * @description Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.apps.v1.ReplicaSetStatus"]
    }
    /** @description ReplicaSetCondition describes the state of a replica set at a certain point. */
    "io.k8s.api.apps.v1.ReplicaSetCondition": {
      /** @description The last time the condition transitioned from one status to another. */
      lastTransitionTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description A human readable message indicating details about the transition. */
      message?: string
      /** @description The reason for the condition's last transition. */
      reason?: string
      /**
       * @description Status of the condition, one of True, False, Unknown.
       * @default
       */
      status: string
      /**
       * @description Type of replica set condition.
       * @default
       */
      type: string
    }
    /** @description ReplicaSetList is a collection of ReplicaSets. */
    "io.k8s.api.apps.v1.ReplicaSetList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset */
      items: components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description ReplicaSetSpec is the specification of a ReplicaSet. */
    "io.k8s.api.apps.v1.ReplicaSetSpec": {
      /**
       * Format: int32
       * @description Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
       */
      minReadySeconds?: number
      /**
       * Format: int32
       * @description Replicas is the number of desired pods. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset
       */
      replicas?: number
      /** @description Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
      selector: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /**
       * @description Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#pod-template
       * @default {}
       */
      template: components["schemas"]["io.k8s.api.core.v1.PodTemplateSpec"]
    }
    /** @description ReplicaSetStatus represents the current status of a ReplicaSet. */
    "io.k8s.api.apps.v1.ReplicaSetStatus": {
      /**
       * Format: int32
       * @description The number of available non-terminating pods (ready for at least minReadySeconds) for this replica set.
       */
      availableReplicas?: number
      /** @description Represents the latest available observations of a replica set's current state. */
      conditions?: components["schemas"]["io.k8s.api.apps.v1.ReplicaSetCondition"][]
      /**
       * Format: int32
       * @description The number of non-terminating pods that have labels matching the labels of the pod template of the replicaset.
       */
      fullyLabeledReplicas?: number
      /**
       * Format: int64
       * @description ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
       */
      observedGeneration?: number
      /**
       * Format: int32
       * @description The number of non-terminating pods targeted by this ReplicaSet with a Ready Condition.
       */
      readyReplicas?: number
      /**
       * Format: int32
       * @description Replicas is the most recently observed number of non-terminating pods. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset
       * @default 0
       */
      replicas: number
      /**
       * Format: int32
       * @description The number of terminating pods for this replica set. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.
       *
       *     This is an alpha field. Enable DeploymentReplicaSetTerminatingReplicas to be able to use this field.
       */
      terminatingReplicas?: number
    }
    /** @description Spec to control the desired behavior of daemon set rolling update. */
    "io.k8s.api.apps.v1.RollingUpdateDaemonSet": {
      /** @description The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediately created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption. */
      maxSurge?: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
      /** @description The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update. */
      maxUnavailable?: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
    }
    /** @description Spec to control the desired behavior of rolling update. */
    "io.k8s.api.apps.v1.RollingUpdateDeployment": {
      /** @description The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
      maxSurge?: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
      /** @description The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
      maxUnavailable?: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
    }
    /** @description RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
    "io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy": {
      /** @description The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding up. This can not be 0. Defaults to 1. This field is alpha-level and is only honored by servers that enable the MaxUnavailableStatefulSet feature. The field applies to all pods in the range 0 to Replicas-1. That means if there is any unavailable pod in the range 0 to Replicas-1, it will be counted towards MaxUnavailable. */
      maxUnavailable?: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
      /**
       * Format: int32
       * @description Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
       */
      partition?: number
    }
    /**
     * @description StatefulSet represents a set of pods with consistent identities. Identities are defined as:
     *       - Network: A single stable DNS and hostname.
     *       - Storage: As many VolumeClaims as requested.
     *
     *     The StatefulSet guarantees that a given network identity will always map to the same storage identity.
     */
    "io.k8s.api.apps.v1.StatefulSet": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Spec defines the desired identities of pods in this set.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.apps.v1.StatefulSetSpec"]
      /**
       * @description Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.apps.v1.StatefulSetStatus"]
    }
    /** @description StatefulSetCondition describes the state of a statefulset at a certain point. */
    "io.k8s.api.apps.v1.StatefulSetCondition": {
      /** @description Last time the condition transitioned from one status to another. */
      lastTransitionTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description A human readable message indicating details about the transition. */
      message?: string
      /** @description The reason for the condition's last transition. */
      reason?: string
      /**
       * @description Status of the condition, one of True, False, Unknown.
       * @default
       */
      status: string
      /**
       * @description Type of statefulset condition.
       * @default
       */
      type: string
    }
    /** @description StatefulSetList is a collection of StatefulSets. */
    "io.k8s.api.apps.v1.StatefulSetList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of stateful sets. */
      items: components["schemas"]["io.k8s.api.apps.v1.StatefulSet"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description StatefulSetOrdinals describes the policy used for replica ordinal assignment in this StatefulSet. */
    "io.k8s.api.apps.v1.StatefulSetOrdinals": {
      /**
       * Format: int32
       * @description start is the number representing the first replica's index. It may be used to number replicas from an alternate index (eg: 1-indexed) over the default 0-indexed names, or to orchestrate progressive movement of replicas from one StatefulSet to another. If set, replica indices will be in the range:
       *       [.spec.ordinals.start, .spec.ordinals.start + .spec.replicas).
       *     If unset, defaults to 0. Replica indices will be in the range:
       *       [0, .spec.replicas).
       * @default 0
       */
      start: number
    }
    /** @description StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates. */
    "io.k8s.api.apps.v1.StatefulSetPersistentVolumeClaimRetentionPolicy": {
      /** @description WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of `Retain` causes PVCs to not be affected by StatefulSet deletion. The `Delete` policy causes those PVCs to be deleted. */
      whenDeleted?: string
      /** @description WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of `Retain` causes PVCs to not be affected by a scaledown. The `Delete` policy causes the associated PVCs for any excess pods above the replica count to be deleted. */
      whenScaled?: string
    }
    /** @description A StatefulSetSpec is the specification of a StatefulSet. */
    "io.k8s.api.apps.v1.StatefulSetSpec": {
      /**
       * Format: int32
       * @description Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
       */
      minReadySeconds?: number
      /** @description ordinals controls the numbering of replica indices in a StatefulSet. The default ordinals behavior assigns a "0" index to the first replica and increments the index by one for each additional replica requested. */
      ordinals?: components["schemas"]["io.k8s.api.apps.v1.StatefulSetOrdinals"]
      /** @description persistentVolumeClaimRetentionPolicy describes the lifecycle of persistent volume claims created from volumeClaimTemplates. By default, all persistent volume claims are created as needed and retained until manually deleted. This policy allows the lifecycle to be altered, for example by deleting persistent volume claims when their stateful set is deleted, or when their pod is scaled down. */
      persistentVolumeClaimRetentionPolicy?:
        components["schemas"]["io.k8s.api.apps.v1.StatefulSetPersistentVolumeClaimRetentionPolicy"]
      /**
       * @description podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
       *
       *     Possible enum values:
       *      - `"OrderedReady"` will create pods in strictly increasing order on scale up and strictly decreasing order on scale down, progressing only when the previous pod is ready or terminated. At most one pod will be changed at any time.
       *      - `"Parallel"` will create and delete pods as soon as the stateful set replica count is changed, and will not wait for pods to be ready or complete termination.
       * @enum {string}
       */
      podManagementPolicy?: "OrderedReady" | "Parallel"
      /**
       * Format: int32
       * @description replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
       */
      replicas?: number
      /**
       * Format: int32
       * @description revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
       */
      revisionHistoryLimit?: number
      /** @description selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
      selector: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /**
       * @description serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
       * @default
       */
      serviceName: string
      /**
       * @description template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. Each pod will be named with the format <statefulsetname>-<podindex>. For example, a pod in a StatefulSet named "web" with index number "3" would be named "web-3". The only allowed template.spec.restartPolicy value is "Always".
       * @default {}
       */
      template: components["schemas"]["io.k8s.api.core.v1.PodTemplateSpec"]
      /**
       * @description updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
       * @default {}
       */
      updateStrategy: components["schemas"]["io.k8s.api.apps.v1.StatefulSetUpdateStrategy"]
      /** @description volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
      volumeClaimTemplates?: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaim"][]
    }
    /** @description StatefulSetStatus represents the current state of a StatefulSet. */
    "io.k8s.api.apps.v1.StatefulSetStatus": {
      /**
       * Format: int32
       * @description Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset.
       * @default 0
       */
      availableReplicas: number
      /**
       * Format: int32
       * @description collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
       */
      collisionCount?: number
      /** @description Represents the latest available observations of a statefulset's current state. */
      conditions?: components["schemas"]["io.k8s.api.apps.v1.StatefulSetCondition"][]
      /**
       * Format: int32
       * @description currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
       */
      currentReplicas?: number
      /** @description currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
      currentRevision?: string
      /**
       * Format: int64
       * @description observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
       */
      observedGeneration?: number
      /**
       * Format: int32
       * @description readyReplicas is the number of pods created for this StatefulSet with a Ready Condition.
       */
      readyReplicas?: number
      /**
       * Format: int32
       * @description replicas is the number of Pods created by the StatefulSet controller.
       * @default 0
       */
      replicas: number
      /** @description updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
      updateRevision?: string
      /**
       * Format: int32
       * @description updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
       */
      updatedReplicas?: number
    }
    /** @description StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
    "io.k8s.api.apps.v1.StatefulSetUpdateStrategy": {
      /** @description RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
      rollingUpdate?: components["schemas"]["io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy"]
      /**
       * @description Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
       *
       *     Possible enum values:
       *      - `"OnDelete"` triggers the legacy behavior. Version tracking and ordered rolling restarts are disabled. Pods are recreated from the StatefulSetSpec when they are manually deleted. When a scale operation is performed with this strategy,specification version indicated by the StatefulSet's currentRevision.
       *      - `"RollingUpdate"` indicates that update will be applied to all Pods in the StatefulSet with respect to the StatefulSet ordering constraints. When a scale operation is performed with this strategy, new Pods will be created from the specification version indicated by the StatefulSet's updateRevision.
       * @enum {string}
       */
      type?: "OnDelete" | "RollingUpdate"
    }
    /** @description Scale represents a scaling request for a resource. */
    "io.k8s.api.autoscaling.v1.Scale": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description spec defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.autoscaling.v1.ScaleSpec"]
      /**
       * @description status is the current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only.
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.autoscaling.v1.ScaleStatus"]
    }
    /** @description ScaleSpec describes the attributes of a scale subresource. */
    "io.k8s.api.autoscaling.v1.ScaleSpec": {
      /**
       * Format: int32
       * @description replicas is the desired number of instances for the scaled object.
       * @default 0
       */
      replicas: number
    }
    /** @description ScaleStatus represents the current status of a scale subresource. */
    "io.k8s.api.autoscaling.v1.ScaleStatus": {
      /**
       * Format: int32
       * @description replicas is the actual number of observed instances of the scaled object.
       * @default 0
       */
      replicas: number
      /** @description selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ */
      selector?: string
    }
    /**
     * @description Represents a Persistent Disk resource in AWS.
     *
     *     An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
     */
    "io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource": {
      /** @description fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
      fsType?: string
      /**
       * Format: int32
       * @description partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
       */
      partition?: number
      /** @description readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
      readOnly?: boolean
      /**
       * @description volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
       * @default
       */
      volumeID: string
    }
    /** @description Affinity is a group of affinity scheduling rules. */
    "io.k8s.api.core.v1.Affinity": {
      /** @description Describes node affinity scheduling rules for the pod. */
      nodeAffinity?: components["schemas"]["io.k8s.api.core.v1.NodeAffinity"]
      /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
      podAffinity?: components["schemas"]["io.k8s.api.core.v1.PodAffinity"]
      /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
      podAntiAffinity?: components["schemas"]["io.k8s.api.core.v1.PodAntiAffinity"]
    }
    /** @description AppArmorProfile defines a pod or container's AppArmor settings. */
    "io.k8s.api.core.v1.AppArmorProfile": {
      /** @description localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost". */
      localhostProfile?: string
      /**
       * @description type indicates which kind of AppArmor profile will be applied. Valid options are:
       *       Localhost - a profile pre-loaded on the node.
       *       RuntimeDefault - the container runtime's default profile.
       *       Unconfined - no AppArmor enforcement.
       *
       *     Possible enum values:
       *      - `"Localhost"` indicates that a profile pre-loaded on the node should be used.
       *      - `"RuntimeDefault"` indicates that the container runtime's default AppArmor profile should be used.
       *      - `"Unconfined"` indicates that no AppArmor profile should be enforced.
       * @default
       * @enum {string}
       */
      type: "Localhost" | "RuntimeDefault" | "Unconfined"
    }
    /** @description AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
    "io.k8s.api.core.v1.AzureDiskVolumeSource": {
      /**
       * @description cachingMode is the Host Caching mode: None, Read Only, Read Write.
       *
       *     Possible enum values:
       *      - `"None"`
       *      - `"ReadOnly"`
       *      - `"ReadWrite"`
       * @default ReadWrite
       * @enum {string}
       */
      cachingMode: "None" | "ReadOnly" | "ReadWrite"
      /**
       * @description diskName is the Name of the data disk in the blob storage
       * @default
       */
      diskName: string
      /**
       * @description diskURI is the URI of data disk in the blob storage
       * @default
       */
      diskURI: string
      /**
       * @description fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
       * @default ext4
       */
      fsType: string
      /**
       * @description kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
       *
       *     Possible enum values:
       *      - `"Dedicated"`
       *      - `"Managed"`
       *      - `"Shared"`
       * @default Shared
       * @enum {string}
       */
      kind: "Dedicated" | "Managed" | "Shared"
      /**
       * @description readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
       * @default false
       */
      readOnly: boolean
    }
    /** @description AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
    "io.k8s.api.core.v1.AzureFileVolumeSource": {
      /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
      readOnly?: boolean
      /**
       * @description secretName is the  name of secret that contains Azure Storage Account Name and Key
       * @default
       */
      secretName: string
      /**
       * @description shareName is the azure share Name
       * @default
       */
      shareName: string
    }
    /** @description Represents a source location of a volume to mount, managed by an external CSI driver */
    "io.k8s.api.core.v1.CSIVolumeSource": {
      /**
       * @description driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
       * @default
       */
      driver: string
      /** @description fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
      fsType?: string
      /** @description nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed. */
      nodePublishSecretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /** @description readOnly specifies a read-only configuration for the volume. Defaults to false (read/write). */
      readOnly?: boolean
      /** @description volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
      volumeAttributes?: {
        [key: string]: string
      }
    }
    /** @description Adds and removes POSIX capabilities from running containers. */
    "io.k8s.api.core.v1.Capabilities": {
      /** @description Added capabilities */
      add?: string[]
      /** @description Removed capabilities */
      drop?: string[]
    }
    /** @description Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
    "io.k8s.api.core.v1.CephFSVolumeSource": {
      /** @description monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
      monitors: string[]
      /** @description path is Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
      path?: string
      /** @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
      readOnly?: boolean
      /** @description secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
      secretFile?: string
      /** @description secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /** @description user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
      user?: string
    }
    /** @description Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
    "io.k8s.api.core.v1.CinderVolumeSource": {
      /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
      fsType?: string
      /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
      readOnly?: boolean
      /** @description secretRef is optional: points to a secret object containing parameters used to connect to OpenStack. */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /**
       * @description volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
       * @default
       */
      volumeID: string
    }
    /** @description ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem. */
    "io.k8s.api.core.v1.ClusterTrustBundleProjection": {
      /** @description Select all ClusterTrustBundles that match this label selector.  Only has effect if signerName is set.  Mutually-exclusive with name.  If unset, interpreted as "match nothing".  If set but empty, interpreted as "match everything". */
      labelSelector?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /** @description Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector. */
      name?: string
      /** @description If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles. */
      optional?: boolean
      /**
       * @description Relative path from the volume root to write the bundle.
       * @default
       */
      path: string
      /** @description Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated. */
      signerName?: string
    }
    /**
     * @description ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
     *
     *     The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
     */
    "io.k8s.api.core.v1.ConfigMapEnvSource": {
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description Specify whether the ConfigMap must be defined */
      optional?: boolean
    }
    /** @description Selects a key from a ConfigMap. */
    "io.k8s.api.core.v1.ConfigMapKeySelector": {
      /**
       * @description The key to select.
       * @default
       */
      key: string
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description Specify whether the ConfigMap or its key must be defined */
      optional?: boolean
    }
    /**
     * @description Adapts a ConfigMap into a projected volume.
     *
     *     The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
     */
    "io.k8s.api.core.v1.ConfigMapProjection": {
      /** @description items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
      items?: components["schemas"]["io.k8s.api.core.v1.KeyToPath"][]
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description optional specify whether the ConfigMap or its keys must be defined */
      optional?: boolean
    }
    /**
     * @description Adapts a ConfigMap into a volume.
     *
     *     The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
     */
    "io.k8s.api.core.v1.ConfigMapVolumeSource": {
      /**
       * Format: int32
       * @description defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
       */
      defaultMode?: number
      /** @description items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
      items?: components["schemas"]["io.k8s.api.core.v1.KeyToPath"][]
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description optional specify whether the ConfigMap or its keys must be defined */
      optional?: boolean
    }
    /** @description A single application container that you want to run within a pod. */
    "io.k8s.api.core.v1.Container": {
      /** @description Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
      args?: string[]
      /** @description Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
      command?: string[]
      /** @description List of environment variables to set in the container. Cannot be updated. */
      env?: components["schemas"]["io.k8s.api.core.v1.EnvVar"][]
      /** @description List of sources to populate environment variables in the container. The keys defined within a source may consist of any printable ASCII characters except '='. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
      envFrom?: components["schemas"]["io.k8s.api.core.v1.EnvFromSource"][]
      /** @description Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
      image?: string
      /**
       * @description Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
       *
       *     Possible enum values:
       *      - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
       *      - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
       *      - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
       * @enum {string}
       */
      imagePullPolicy?: "Always" | "IfNotPresent" | "Never"
      /** @description Actions that the management system should take in response to container lifecycle events. Cannot be updated. */
      lifecycle?: components["schemas"]["io.k8s.api.core.v1.Lifecycle"]
      /** @description Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
      livenessProbe?: components["schemas"]["io.k8s.api.core.v1.Probe"]
      /**
       * @description Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
       * @default
       */
      name: string
      /** @description List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated. */
      ports?: components["schemas"]["io.k8s.api.core.v1.ContainerPort"][]
      /** @description Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
      readinessProbe?: components["schemas"]["io.k8s.api.core.v1.Probe"]
      /** @description Resources resize policy for the container. */
      resizePolicy?: components["schemas"]["io.k8s.api.core.v1.ContainerResizePolicy"][]
      /**
       * @description Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       * @default {}
       */
      resources: components["schemas"]["io.k8s.api.core.v1.ResourceRequirements"]
      /** @description RestartPolicy defines the restart behavior of individual containers in a pod. This overrides the pod-level restart policy. When this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Additionally, setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed. */
      restartPolicy?: string
      /** @description Represents a list of rules to be checked to determine if the container should be restarted on exit. The rules are evaluated in order. Once a rule matches a container exit condition, the remaining rules are ignored. If no rule matches the container exit condition, the Container-level restart policy determines the whether the container is restarted or not. Constraints on the rules: - At most 20 rules are allowed. - Rules can have the same action. - Identical rules are not forbidden in validations. When rules are specified, container MUST set RestartPolicy explicitly even it if matches the Pod's RestartPolicy. */
      restartPolicyRules?: components["schemas"]["io.k8s.api.core.v1.ContainerRestartRule"][]
      /** @description SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
      securityContext?: components["schemas"]["io.k8s.api.core.v1.SecurityContext"]
      /** @description StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
      startupProbe?: components["schemas"]["io.k8s.api.core.v1.Probe"]
      /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
      stdin?: boolean
      /** @description Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
      stdinOnce?: boolean
      /** @description Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
      terminationMessagePath?: string
      /**
       * @description Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
       *
       *     Possible enum values:
       *      - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
       *      - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
       * @enum {string}
       */
      terminationMessagePolicy?: "FallbackToLogsOnError" | "File"
      /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
      tty?: boolean
      /** @description volumeDevices is the list of block devices to be used by the container. */
      volumeDevices?: components["schemas"]["io.k8s.api.core.v1.VolumeDevice"][]
      /** @description Pod volumes to mount into the container's filesystem. Cannot be updated. */
      volumeMounts?: components["schemas"]["io.k8s.api.core.v1.VolumeMount"][]
      /** @description Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
      workingDir?: string
    }
    /** @description ContainerPort represents a network port in a single container. */
    "io.k8s.api.core.v1.ContainerPort": {
      /**
       * Format: int32
       * @description Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
       * @default 0
       */
      containerPort: number
      /** @description What host IP to bind the external port to. */
      hostIP?: string
      /**
       * Format: int32
       * @description Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
       */
      hostPort?: number
      /** @description If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
      name?: string
      /**
       * @description Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
       *
       *     Possible enum values:
       *      - `"SCTP"` is the SCTP protocol.
       *      - `"TCP"` is the TCP protocol.
       *      - `"UDP"` is the UDP protocol.
       * @default TCP
       * @enum {string}
       */
      protocol: "SCTP" | "TCP" | "UDP"
    }
    /** @description ContainerResizePolicy represents resource resize policy for the container. */
    "io.k8s.api.core.v1.ContainerResizePolicy": {
      /**
       * @description Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
       * @default
       */
      resourceName: string
      /**
       * @description Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
       * @default
       */
      restartPolicy: string
    }
    /** @description ContainerRestartRule describes how a container exit is handled. */
    "io.k8s.api.core.v1.ContainerRestartRule": {
      /** @description Specifies the action taken on a container exit if the requirements are satisfied. The only possible value is "Restart" to restart the container. */
      action: string
      /** @description Represents the exit codes to check on container exits. */
      exitCodes?: components["schemas"]["io.k8s.api.core.v1.ContainerRestartRuleOnExitCodes"]
    }
    /** @description ContainerRestartRuleOnExitCodes describes the condition for handling an exited container based on its exit codes. */
    "io.k8s.api.core.v1.ContainerRestartRuleOnExitCodes": {
      /**
       * @description Represents the relationship between the container exit code(s) and the specified values. Possible values are: - In: the requirement is satisfied if the container exit code is in the
       *       set of specified values.
       *     - NotIn: the requirement is satisfied if the container exit code is
       *       not in the set of specified values.
       */
      operator: string
      /** @description Specifies the set of values to check for container exit codes. At most 255 elements are allowed. */
      values?: number[]
    }
    /** @description Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
    "io.k8s.api.core.v1.DownwardAPIProjection": {
      /** @description Items is a list of DownwardAPIVolume file */
      items?: components["schemas"]["io.k8s.api.core.v1.DownwardAPIVolumeFile"][]
    }
    /** @description DownwardAPIVolumeFile represents information to create the file containing the pod field */
    "io.k8s.api.core.v1.DownwardAPIVolumeFile": {
      /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
      fieldRef?: components["schemas"]["io.k8s.api.core.v1.ObjectFieldSelector"]
      /**
       * Format: int32
       * @description Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
       */
      mode?: number
      /**
       * @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
       * @default
       */
      path: string
      /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
      resourceFieldRef?: components["schemas"]["io.k8s.api.core.v1.ResourceFieldSelector"]
    }
    /** @description DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
    "io.k8s.api.core.v1.DownwardAPIVolumeSource": {
      /**
       * Format: int32
       * @description Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
       */
      defaultMode?: number
      /** @description Items is a list of downward API volume file */
      items?: components["schemas"]["io.k8s.api.core.v1.DownwardAPIVolumeFile"][]
    }
    /** @description Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
    "io.k8s.api.core.v1.EmptyDirVolumeSource": {
      /** @description medium represents what type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
      medium?: string
      /** @description sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
      sizeLimit?: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
    }
    /** @description EnvFromSource represents the source of a set of ConfigMaps or Secrets */
    "io.k8s.api.core.v1.EnvFromSource": {
      /** @description The ConfigMap to select from */
      configMapRef?: components["schemas"]["io.k8s.api.core.v1.ConfigMapEnvSource"]
      /** @description Optional text to prepend to the name of each environment variable. May consist of any printable ASCII characters except '='. */
      prefix?: string
      /** @description The Secret to select from */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.SecretEnvSource"]
    }
    /** @description EnvVar represents an environment variable present in a Container. */
    "io.k8s.api.core.v1.EnvVar": {
      /**
       * @description Name of the environment variable. May consist of any printable ASCII characters except '='.
       * @default
       */
      name: string
      /** @description Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
      value?: string
      /** @description Source for the environment variable's value. Cannot be used if value is not empty. */
      valueFrom?: components["schemas"]["io.k8s.api.core.v1.EnvVarSource"]
    }
    /** @description EnvVarSource represents a source for the value of an EnvVar. */
    "io.k8s.api.core.v1.EnvVarSource": {
      /** @description Selects a key of a ConfigMap. */
      configMapKeyRef?: components["schemas"]["io.k8s.api.core.v1.ConfigMapKeySelector"]
      /** @description Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs. */
      fieldRef?: components["schemas"]["io.k8s.api.core.v1.ObjectFieldSelector"]
      /** @description FileKeyRef selects a key of the env file. Requires the EnvFiles feature gate to be enabled. */
      fileKeyRef?: components["schemas"]["io.k8s.api.core.v1.FileKeySelector"]
      /** @description Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
      resourceFieldRef?: components["schemas"]["io.k8s.api.core.v1.ResourceFieldSelector"]
      /** @description Selects a key of a secret in the pod's namespace */
      secretKeyRef?: components["schemas"]["io.k8s.api.core.v1.SecretKeySelector"]
    }
    /**
     * @description An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
     *
     *     To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
     */
    "io.k8s.api.core.v1.EphemeralContainer": {
      /** @description Arguments to the entrypoint. The image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
      args?: string[]
      /** @description Entrypoint array. Not executed within a shell. The image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
      command?: string[]
      /** @description List of environment variables to set in the container. Cannot be updated. */
      env?: components["schemas"]["io.k8s.api.core.v1.EnvVar"][]
      /** @description List of sources to populate environment variables in the container. The keys defined within a source may consist of any printable ASCII characters except '='. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
      envFrom?: components["schemas"]["io.k8s.api.core.v1.EnvFromSource"][]
      /** @description Container image name. More info: https://kubernetes.io/docs/concepts/containers/images */
      image?: string
      /**
       * @description Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
       *
       *     Possible enum values:
       *      - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
       *      - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
       *      - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
       * @enum {string}
       */
      imagePullPolicy?: "Always" | "IfNotPresent" | "Never"
      /** @description Lifecycle is not allowed for ephemeral containers. */
      lifecycle?: components["schemas"]["io.k8s.api.core.v1.Lifecycle"]
      /** @description Probes are not allowed for ephemeral containers. */
      livenessProbe?: components["schemas"]["io.k8s.api.core.v1.Probe"]
      /**
       * @description Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
       * @default
       */
      name: string
      /** @description Ports are not allowed for ephemeral containers. */
      ports?: components["schemas"]["io.k8s.api.core.v1.ContainerPort"][]
      /** @description Probes are not allowed for ephemeral containers. */
      readinessProbe?: components["schemas"]["io.k8s.api.core.v1.Probe"]
      /** @description Resources resize policy for the container. */
      resizePolicy?: components["schemas"]["io.k8s.api.core.v1.ContainerResizePolicy"][]
      /**
       * @description Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
       * @default {}
       */
      resources: components["schemas"]["io.k8s.api.core.v1.ResourceRequirements"]
      /** @description Restart policy for the container to manage the restart behavior of each container within a pod. You cannot set this field on ephemeral containers. */
      restartPolicy?: string
      /** @description Represents a list of rules to be checked to determine if the container should be restarted on exit. You cannot set this field on ephemeral containers. */
      restartPolicyRules?: components["schemas"]["io.k8s.api.core.v1.ContainerRestartRule"][]
      /** @description Optional: SecurityContext defines the security options the ephemeral container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. */
      securityContext?: components["schemas"]["io.k8s.api.core.v1.SecurityContext"]
      /** @description Probes are not allowed for ephemeral containers. */
      startupProbe?: components["schemas"]["io.k8s.api.core.v1.Probe"]
      /** @description Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
      stdin?: boolean
      /** @description Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
      stdinOnce?: boolean
      /**
       * @description If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
       *
       *     The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
       */
      targetContainerName?: string
      /** @description Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
      terminationMessagePath?: string
      /**
       * @description Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
       *
       *     Possible enum values:
       *      - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
       *      - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
       * @enum {string}
       */
      terminationMessagePolicy?: "FallbackToLogsOnError" | "File"
      /** @description Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
      tty?: boolean
      /** @description volumeDevices is the list of block devices to be used by the container. */
      volumeDevices?: components["schemas"]["io.k8s.api.core.v1.VolumeDevice"][]
      /** @description Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated. */
      volumeMounts?: components["schemas"]["io.k8s.api.core.v1.VolumeMount"][]
      /** @description Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
      workingDir?: string
    }
    /** @description Represents an ephemeral volume that is handled by a normal storage driver. */
    "io.k8s.api.core.v1.EphemeralVolumeSource": {
      /**
       * @description Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long).
       *
       *     An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster.
       *
       *     This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created.
       *
       *     Required, must not be nil.
       */
      volumeClaimTemplate?: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaimTemplate"]
    }
    /** @description ExecAction describes a "run in container" action. */
    "io.k8s.api.core.v1.ExecAction": {
      /** @description Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
      command?: string[]
    }
    /** @description Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
    "io.k8s.api.core.v1.FCVolumeSource": {
      /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
      fsType?: string
      /**
       * Format: int32
       * @description lun is Optional: FC target lun number
       */
      lun?: number
      /** @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
      readOnly?: boolean
      /** @description targetWWNs is Optional: FC target worldwide names (WWNs) */
      targetWWNs?: string[]
      /** @description wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
      wwids?: string[]
    }
    /** @description FileKeySelector selects a key of the env file. */
    "io.k8s.api.core.v1.FileKeySelector": {
      /**
       * @description The key within the env file. An invalid key will prevent the pod from starting. The keys defined within a source may consist of any printable ASCII characters except '='. During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.
       * @default
       */
      key: string
      /**
       * @description Specify whether the file or its key must be defined. If the file or key does not exist, then the env var is not published. If optional is set to true and the specified key does not exist, the environment variable will not be set in the Pod's containers.
       *
       *     If optional is set to false and the specified key does not exist, an error will be returned during Pod creation.
       * @default false
       */
      optional: boolean
      /**
       * @description The path within the volume from which to select the file. Must be relative and may not contain the '..' path or start with '..'.
       * @default
       */
      path: string
      /**
       * @description The name of the volume mount containing the env file.
       * @default
       */
      volumeName: string
    }
    /** @description FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
    "io.k8s.api.core.v1.FlexVolumeSource": {
      /**
       * @description driver is the name of the driver to use for this volume.
       * @default
       */
      driver: string
      /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
      fsType?: string
      /** @description options is Optional: this field holds extra command options if any. */
      options?: {
        [key: string]: string
      }
      /** @description readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
      readOnly?: boolean
      /** @description secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts. */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
    }
    /** @description Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
    "io.k8s.api.core.v1.FlockerVolumeSource": {
      /** @description datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
      datasetName?: string
      /** @description datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset */
      datasetUUID?: string
    }
    /**
     * @description Represents a Persistent Disk resource in Google Compute Engine.
     *
     *     A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
     */
    "io.k8s.api.core.v1.GCEPersistentDiskVolumeSource": {
      /** @description fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
      fsType?: string
      /**
       * Format: int32
       * @description partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
       */
      partition?: number
      /**
       * @description pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
       * @default
       */
      pdName: string
      /** @description readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
      readOnly?: boolean
    }
    /** @description GRPCAction specifies an action involving a GRPC service. */
    "io.k8s.api.core.v1.GRPCAction": {
      /**
       * Format: int32
       * @description Port number of the gRPC service. Number must be in the range 1 to 65535.
       * @default 0
       */
      port: number
      /**
       * @description Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
       *
       *     If this is not specified, the default behavior is defined by gRPC.
       * @default
       */
      service: string
    }
    /**
     * @description Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
     *
     *     DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
     */
    "io.k8s.api.core.v1.GitRepoVolumeSource": {
      /** @description directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
      directory?: string
      /**
       * @description repository is the URL
       * @default
       */
      repository: string
      /** @description revision is the commit hash for the specified revision. */
      revision?: string
    }
    /** @description Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
    "io.k8s.api.core.v1.GlusterfsVolumeSource": {
      /**
       * @description endpoints is the endpoint name that details Glusterfs topology.
       * @default
       */
      endpoints: string
      /**
       * @description path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
       * @default
       */
      path: string
      /** @description readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
      readOnly?: boolean
    }
    /** @description HTTPGetAction describes an action based on HTTP Get requests. */
    "io.k8s.api.core.v1.HTTPGetAction": {
      /** @description Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
      host?: string
      /** @description Custom headers to set in the request. HTTP allows repeated headers. */
      httpHeaders?: components["schemas"]["io.k8s.api.core.v1.HTTPHeader"][]
      /** @description Path to access on the HTTP server. */
      path?: string
      /** @description Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
      port: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
      /**
       * @description Scheme to use for connecting to the host. Defaults to HTTP.
       *
       *     Possible enum values:
       *      - `"HTTP"` means that the scheme used will be http://
       *      - `"HTTPS"` means that the scheme used will be https://
       * @enum {string}
       */
      scheme?: "HTTP" | "HTTPS"
    }
    /** @description HTTPHeader describes a custom header to be used in HTTP probes */
    "io.k8s.api.core.v1.HTTPHeader": {
      /**
       * @description The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
       * @default
       */
      name: string
      /**
       * @description The header field value
       * @default
       */
      value: string
    }
    /** @description HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
    "io.k8s.api.core.v1.HostAlias": {
      /** @description Hostnames for the above IP address. */
      hostnames?: string[]
      /**
       * @description IP address of the host file entry.
       * @default
       */
      ip: string
    }
    /** @description Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
    "io.k8s.api.core.v1.HostPathVolumeSource": {
      /**
       * @description path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
       * @default
       */
      path: string
      /**
       * @description type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
       *
       *     Possible enum values:
       *      - `""` For backwards compatible, leave it empty if unset
       *      - `"BlockDevice"` A block device must exist at the given path
       *      - `"CharDevice"` A character device must exist at the given path
       *      - `"Directory"` A directory must exist at the given path
       *      - `"DirectoryOrCreate"` If nothing exists at the given path, an empty directory will be created there as needed with file mode 0755, having the same group and ownership with Kubelet.
       *      - `"File"` A file must exist at the given path
       *      - `"FileOrCreate"` If nothing exists at the given path, an empty file will be created there as needed with file mode 0644, having the same group and ownership with Kubelet.
       *      - `"Socket"` A UNIX socket must exist at the given path
       * @enum {string}
       */
      type?: "" | "BlockDevice" | "CharDevice" | "Directory" | "DirectoryOrCreate" | "File" | "FileOrCreate" | "Socket"
    }
    /** @description Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
    "io.k8s.api.core.v1.ISCSIVolumeSource": {
      /** @description chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication */
      chapAuthDiscovery?: boolean
      /** @description chapAuthSession defines whether support iSCSI Session CHAP authentication */
      chapAuthSession?: boolean
      /** @description fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
      fsType?: string
      /** @description initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
      initiatorName?: string
      /**
       * @description iqn is the target iSCSI Qualified Name.
       * @default
       */
      iqn: string
      /**
       * @description iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
       * @default default
       */
      iscsiInterface: string
      /**
       * Format: int32
       * @description lun represents iSCSI Target Lun number.
       * @default 0
       */
      lun: number
      /** @description portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
      portals?: string[]
      /** @description readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
      readOnly?: boolean
      /** @description secretRef is the CHAP Secret for iSCSI target and initiator authentication */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /**
       * @description targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
       * @default
       */
      targetPortal: string
    }
    /** @description ImageVolumeSource represents a image volume resource. */
    "io.k8s.api.core.v1.ImageVolumeSource": {
      /**
       * @description Policy for pulling OCI objects. Possible values are: Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
       *
       *     Possible enum values:
       *      - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
       *      - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
       *      - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
       * @enum {string}
       */
      pullPolicy?: "Always" | "IfNotPresent" | "Never"
      /** @description Required: Image or artifact reference to be used. Behaves in the same way as pod.spec.containers[*].image. Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
      reference?: string
    }
    /** @description Maps a string key to a path within a volume. */
    "io.k8s.api.core.v1.KeyToPath": {
      /**
       * @description key is the key to project.
       * @default
       */
      key: string
      /**
       * Format: int32
       * @description mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
       */
      mode?: number
      /**
       * @description path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
       * @default
       */
      path: string
    }
    /** @description Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
    "io.k8s.api.core.v1.Lifecycle": {
      /** @description PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
      postStart?: components["schemas"]["io.k8s.api.core.v1.LifecycleHandler"]
      /** @description PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
      preStop?: components["schemas"]["io.k8s.api.core.v1.LifecycleHandler"]
      /**
       * @description StopSignal defines which signal will be sent to a container when it is being stopped. If not specified, the default is defined by the container runtime in use. StopSignal can only be set for Pods with a non-empty .spec.os.name
       *
       *     Possible enum values:
       *      - `"SIGABRT"`
       *      - `"SIGALRM"`
       *      - `"SIGBUS"`
       *      - `"SIGCHLD"`
       *      - `"SIGCLD"`
       *      - `"SIGCONT"`
       *      - `"SIGFPE"`
       *      - `"SIGHUP"`
       *      - `"SIGILL"`
       *      - `"SIGINT"`
       *      - `"SIGIO"`
       *      - `"SIGIOT"`
       *      - `"SIGKILL"`
       *      - `"SIGPIPE"`
       *      - `"SIGPOLL"`
       *      - `"SIGPROF"`
       *      - `"SIGPWR"`
       *      - `"SIGQUIT"`
       *      - `"SIGRTMAX"`
       *      - `"SIGRTMAX-1"`
       *      - `"SIGRTMAX-10"`
       *      - `"SIGRTMAX-11"`
       *      - `"SIGRTMAX-12"`
       *      - `"SIGRTMAX-13"`
       *      - `"SIGRTMAX-14"`
       *      - `"SIGRTMAX-2"`
       *      - `"SIGRTMAX-3"`
       *      - `"SIGRTMAX-4"`
       *      - `"SIGRTMAX-5"`
       *      - `"SIGRTMAX-6"`
       *      - `"SIGRTMAX-7"`
       *      - `"SIGRTMAX-8"`
       *      - `"SIGRTMAX-9"`
       *      - `"SIGRTMIN"`
       *      - `"SIGRTMIN+1"`
       *      - `"SIGRTMIN+10"`
       *      - `"SIGRTMIN+11"`
       *      - `"SIGRTMIN+12"`
       *      - `"SIGRTMIN+13"`
       *      - `"SIGRTMIN+14"`
       *      - `"SIGRTMIN+15"`
       *      - `"SIGRTMIN+2"`
       *      - `"SIGRTMIN+3"`
       *      - `"SIGRTMIN+4"`
       *      - `"SIGRTMIN+5"`
       *      - `"SIGRTMIN+6"`
       *      - `"SIGRTMIN+7"`
       *      - `"SIGRTMIN+8"`
       *      - `"SIGRTMIN+9"`
       *      - `"SIGSEGV"`
       *      - `"SIGSTKFLT"`
       *      - `"SIGSTOP"`
       *      - `"SIGSYS"`
       *      - `"SIGTERM"`
       *      - `"SIGTRAP"`
       *      - `"SIGTSTP"`
       *      - `"SIGTTIN"`
       *      - `"SIGTTOU"`
       *      - `"SIGURG"`
       *      - `"SIGUSR1"`
       *      - `"SIGUSR2"`
       *      - `"SIGVTALRM"`
       *      - `"SIGWINCH"`
       *      - `"SIGXCPU"`
       *      - `"SIGXFSZ"`
       * @enum {string}
       */
      stopSignal?:
        | "SIGABRT"
        | "SIGALRM"
        | "SIGBUS"
        | "SIGCHLD"
        | "SIGCLD"
        | "SIGCONT"
        | "SIGFPE"
        | "SIGHUP"
        | "SIGILL"
        | "SIGINT"
        | "SIGIO"
        | "SIGIOT"
        | "SIGKILL"
        | "SIGPIPE"
        | "SIGPOLL"
        | "SIGPROF"
        | "SIGPWR"
        | "SIGQUIT"
        | "SIGRTMAX"
        | "SIGRTMAX-1"
        | "SIGRTMAX-10"
        | "SIGRTMAX-11"
        | "SIGRTMAX-12"
        | "SIGRTMAX-13"
        | "SIGRTMAX-14"
        | "SIGRTMAX-2"
        | "SIGRTMAX-3"
        | "SIGRTMAX-4"
        | "SIGRTMAX-5"
        | "SIGRTMAX-6"
        | "SIGRTMAX-7"
        | "SIGRTMAX-8"
        | "SIGRTMAX-9"
        | "SIGRTMIN"
        | "SIGRTMIN+1"
        | "SIGRTMIN+10"
        | "SIGRTMIN+11"
        | "SIGRTMIN+12"
        | "SIGRTMIN+13"
        | "SIGRTMIN+14"
        | "SIGRTMIN+15"
        | "SIGRTMIN+2"
        | "SIGRTMIN+3"
        | "SIGRTMIN+4"
        | "SIGRTMIN+5"
        | "SIGRTMIN+6"
        | "SIGRTMIN+7"
        | "SIGRTMIN+8"
        | "SIGRTMIN+9"
        | "SIGSEGV"
        | "SIGSTKFLT"
        | "SIGSTOP"
        | "SIGSYS"
        | "SIGTERM"
        | "SIGTRAP"
        | "SIGTSTP"
        | "SIGTTIN"
        | "SIGTTOU"
        | "SIGURG"
        | "SIGUSR1"
        | "SIGUSR2"
        | "SIGVTALRM"
        | "SIGWINCH"
        | "SIGXCPU"
        | "SIGXFSZ"
    }
    /** @description LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
    "io.k8s.api.core.v1.LifecycleHandler": {
      /** @description Exec specifies a command to execute in the container. */
      exec?: components["schemas"]["io.k8s.api.core.v1.ExecAction"]
      /** @description HTTPGet specifies an HTTP GET request to perform. */
      httpGet?: components["schemas"]["io.k8s.api.core.v1.HTTPGetAction"]
      /** @description Sleep represents a duration that the container should sleep. */
      sleep?: components["schemas"]["io.k8s.api.core.v1.SleepAction"]
      /** @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for backward compatibility. There is no validation of this field and lifecycle hooks will fail at runtime when it is specified. */
      tcpSocket?: components["schemas"]["io.k8s.api.core.v1.TCPSocketAction"]
    }
    /** @description LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
    "io.k8s.api.core.v1.LocalObjectReference": {
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
    }
    /** @description ModifyVolumeStatus represents the status object of ControllerModifyVolume operation */
    "io.k8s.api.core.v1.ModifyVolumeStatus": {
      /**
       * @description status is the status of the ControllerModifyVolume operation. It can be in any of following states:
       *      - Pending
       *        Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as
       *        the specified VolumeAttributesClass not existing.
       *      - InProgress
       *        InProgress indicates that the volume is being modified.
       *      - Infeasible
       *       Infeasible indicates that the request has been rejected as invalid by the CSI driver. To
       *     	  resolve the error, a valid VolumeAttributesClass needs to be specified.
       *     Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
       *
       *     Possible enum values:
       *      - `"InProgress"` InProgress indicates that the volume is being modified
       *      - `"Infeasible"` Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified
       *      - `"Pending"` Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing
       * @default
       * @enum {string}
       */
      status: "InProgress" | "Infeasible" | "Pending"
      /** @description targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled */
      targetVolumeAttributesClassName?: string
    }
    /** @description Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
    "io.k8s.api.core.v1.NFSVolumeSource": {
      /**
       * @description path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
       * @default
       */
      path: string
      /** @description readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
      readOnly?: boolean
      /**
       * @description server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
       * @default
       */
      server: string
    }
    /** @description Node affinity is a group of node affinity scheduling rules. */
    "io.k8s.api.core.v1.NodeAffinity": {
      /** @description The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
      preferredDuringSchedulingIgnoredDuringExecution?:
        components["schemas"]["io.k8s.api.core.v1.PreferredSchedulingTerm"][]
      /** @description If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node. */
      requiredDuringSchedulingIgnoredDuringExecution?: components["schemas"]["io.k8s.api.core.v1.NodeSelector"]
    }
    /** @description A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
    "io.k8s.api.core.v1.NodeSelector": {
      /** @description Required. A list of node selector terms. The terms are ORed. */
      nodeSelectorTerms: components["schemas"]["io.k8s.api.core.v1.NodeSelectorTerm"][]
    }
    /** @description A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
    "io.k8s.api.core.v1.NodeSelectorRequirement": {
      /**
       * @description The label key that the selector applies to.
       * @default
       */
      key: string
      /**
       * @description Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
       *
       *     Possible enum values:
       *      - `"DoesNotExist"`
       *      - `"Exists"`
       *      - `"Gt"`
       *      - `"In"`
       *      - `"Lt"`
       *      - `"NotIn"`
       * @default
       * @enum {string}
       */
      operator: "DoesNotExist" | "Exists" | "Gt" | "In" | "Lt" | "NotIn"
      /** @description An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
      values?: string[]
    }
    /** @description A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
    "io.k8s.api.core.v1.NodeSelectorTerm": {
      /** @description A list of node selector requirements by node's labels. */
      matchExpressions?: components["schemas"]["io.k8s.api.core.v1.NodeSelectorRequirement"][]
      /** @description A list of node selector requirements by node's fields. */
      matchFields?: components["schemas"]["io.k8s.api.core.v1.NodeSelectorRequirement"][]
    }
    /** @description ObjectFieldSelector selects an APIVersioned field of an object. */
    "io.k8s.api.core.v1.ObjectFieldSelector": {
      /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
      apiVersion?: string
      /**
       * @description Path of the field to select in the specified API version.
       * @default
       */
      fieldPath: string
    }
    /** @description PersistentVolumeClaim is a user's request for and claim to a persistent volume */
    "io.k8s.api.core.v1.PersistentVolumeClaim": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaimSpec"]
      /**
       * @description status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaimStatus"]
    }
    /** @description PersistentVolumeClaimCondition contains details about state of pvc */
    "io.k8s.api.core.v1.PersistentVolumeClaimCondition": {
      /** @description lastProbeTime is the time we probed the condition. */
      lastProbeTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description lastTransitionTime is the time the condition transitioned from one status to another. */
      lastTransitionTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description message is the human-readable message indicating details about last transition. */
      message?: string
      /** @description reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized. */
      reason?: string
      /**
       * @description Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=state%20of%20pvc-,conditions.status,-(string)%2C%20required
       * @default
       */
      status: string
      /**
       * @description Type is the type of the condition. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=set%20to%20%27ResizeStarted%27.-,PersistentVolumeClaimCondition,-contains%20details%20about
       * @default
       */
      type: string
    }
    /** @description PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
    "io.k8s.api.core.v1.PersistentVolumeClaimSpec": {
      /** @description accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
      accessModes?: ("ReadOnlyMany" | "ReadWriteMany" | "ReadWriteOnce" | "ReadWriteOncePod")[]
      /** @description dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource. */
      dataSource?: components["schemas"]["io.k8s.api.core.v1.TypedLocalObjectReference"]
      /**
       * @description dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef
       *       allows any non-core object, as well as PersistentVolumeClaim objects.
       *     * While dataSource ignores disallowed values (dropping them), dataSourceRef
       *       preserves all values, and generates an error if a disallowed value is
       *       specified.
       *     * While dataSource only allows local objects, dataSourceRef allows objects
       *       in any namespaces.
       *     (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
       */
      dataSourceRef?: components["schemas"]["io.k8s.api.core.v1.TypedObjectReference"]
      /**
       * @description resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
       * @default {}
       */
      resources: components["schemas"]["io.k8s.api.core.v1.VolumeResourceRequirements"]
      /** @description selector is a label query over volumes to consider for binding. */
      selector?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /** @description storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
      storageClassName?: string
      /** @description volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string or nil value indicates that no VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state, this field can be reset to its previous value (including nil) to cancel the modification. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ */
      volumeAttributesClassName?: string
      /**
       * @description volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
       *
       *     Possible enum values:
       *      - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
       *      - `"Filesystem"` means the volume will be or is formatted with a filesystem.
       * @enum {string}
       */
      volumeMode?: "Block" | "Filesystem"
      /** @description volumeName is the binding reference to the PersistentVolume backing this claim. */
      volumeName?: string
    }
    /** @description PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
    "io.k8s.api.core.v1.PersistentVolumeClaimStatus": {
      /** @description accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
      accessModes?: ("ReadOnlyMany" | "ReadWriteMany" | "ReadWriteOnce" | "ReadWriteOncePod")[]
      /**
       * @description allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either:
       *     	* Un-prefixed keys:
       *     		- storage - the capacity of the volume.
       *     	* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
       *     Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
       *
       *     ClaimResourceStatus can be in any of following states:
       *     	- ControllerResizeInProgress:
       *     		State set when resize controller starts resizing the volume in control-plane.
       *     	- ControllerResizeFailed:
       *     		State set when resize has failed in resize controller with a terminal error.
       *     	- NodeResizePending:
       *     		State set when resize controller has finished resizing the volume but further resizing of
       *     		volume is needed on the node.
       *     	- NodeResizeInProgress:
       *     		State set when kubelet starts resizing the volume.
       *     	- NodeResizeFailed:
       *     		State set when resizing has failed in kubelet with a terminal error. Transient errors don't set
       *     		NodeResizeFailed.
       *     For example: if expanding a PVC for more capacity - this field can be one of the following states:
       *     	- pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeInProgress"
       *          - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeFailed"
       *          - pvc.status.allocatedResourceStatus['storage'] = "NodeResizePending"
       *          - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeInProgress"
       *          - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeFailed"
       *     When this field is not set, it means that no resize operation is in progress for the given PVC.
       *
       *     A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
       *
       *     This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
       */
      allocatedResourceStatuses?: {
        [key: string]:
          | "ControllerResizeInProgress"
          | "ControllerResizeInfeasible"
          | "NodeResizeInProgress"
          | "NodeResizeInfeasible"
          | "NodeResizePending"
      }
      /**
       * @description allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either:
       *     	* Un-prefixed keys:
       *     		- storage - the capacity of the volume.
       *     	* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
       *     Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.
       *
       *     Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity.
       *
       *     A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.
       *
       *     This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
       */
      allocatedResources?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
      /** @description capacity represents the actual resources of the underlying volume. */
      capacity?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
      /** @description conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'Resizing'. */
      conditions?: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaimCondition"][]
      /** @description currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim */
      currentVolumeAttributesClassName?: string
      /** @description ModifyVolumeStatus represents the status object of ControllerModifyVolume operation. When this is unset, there is no ModifyVolume operation being attempted. */
      modifyVolumeStatus?: components["schemas"]["io.k8s.api.core.v1.ModifyVolumeStatus"]
      /**
       * @description phase represents the current phase of PersistentVolumeClaim.
       *
       *     Possible enum values:
       *      - `"Bound"` used for PersistentVolumeClaims that are bound
       *      - `"Lost"` used for PersistentVolumeClaims that lost their underlying PersistentVolume. The claim was bound to a PersistentVolume and this volume does not exist any longer and all data on it was lost.
       *      - `"Pending"` used for PersistentVolumeClaims that are not yet bound
       * @enum {string}
       */
      phase?: "Bound" | "Lost" | "Pending"
    }
    /** @description PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
    "io.k8s.api.core.v1.PersistentVolumeClaimTemplate": {
      /**
       * @description May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaimSpec"]
    }
    /** @description PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
    "io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource": {
      /**
       * @description claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
       * @default
       */
      claimName: string
      /** @description readOnly Will force the ReadOnly setting in VolumeMounts. Default false. */
      readOnly?: boolean
    }
    /** @description Represents a Photon Controller persistent disk resource. */
    "io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource": {
      /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
      fsType?: string
      /**
       * @description pdID is the ID that identifies Photon Controller persistent disk
       * @default
       */
      pdID: string
    }
    /** @description Pod affinity is a group of inter pod affinity scheduling rules. */
    "io.k8s.api.core.v1.PodAffinity": {
      /** @description The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
      preferredDuringSchedulingIgnoredDuringExecution?:
        components["schemas"]["io.k8s.api.core.v1.WeightedPodAffinityTerm"][]
      /** @description If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
      requiredDuringSchedulingIgnoredDuringExecution?: components["schemas"]["io.k8s.api.core.v1.PodAffinityTerm"][]
    }
    /** @description Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
    "io.k8s.api.core.v1.PodAffinityTerm": {
      /** @description A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods. */
      labelSelector?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /** @description MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. */
      matchLabelKeys?: string[]
      /** @description MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. */
      mismatchLabelKeys?: string[]
      /** @description A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. */
      namespaceSelector?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /** @description namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace". */
      namespaces?: string[]
      /**
       * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
       * @default
       */
      topologyKey: string
    }
    /** @description Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
    "io.k8s.api.core.v1.PodAntiAffinity": {
      /** @description The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and subtracting "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
      preferredDuringSchedulingIgnoredDuringExecution?:
        components["schemas"]["io.k8s.api.core.v1.WeightedPodAffinityTerm"][]
      /** @description If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
      requiredDuringSchedulingIgnoredDuringExecution?: components["schemas"]["io.k8s.api.core.v1.PodAffinityTerm"][]
    }
    /** @description PodCertificateProjection provides a private key and X.509 certificate in the pod filesystem. */
    "io.k8s.api.core.v1.PodCertificateProjection": {
      /**
       * @description Write the certificate chain at this path in the projected volume.
       *
       *     Most applications should use credentialBundlePath.  When using keyPath and certificateChainPath, your application needs to check that the key and leaf certificate are consistent, because it is possible to read the files mid-rotation.
       */
      certificateChainPath?: string
      /**
       * @description Write the credential bundle at this path in the projected volume.
       *
       *     The credential bundle is a single file that contains multiple PEM blocks. The first PEM block is a PRIVATE KEY block, containing a PKCS#8 private key.
       *
       *     The remaining blocks are CERTIFICATE blocks, containing the issued certificate chain from the signer (leaf and any intermediates).
       *
       *     Using credentialBundlePath lets your Pod's application code make a single atomic read that retrieves a consistent key and certificate chain.  If you project them to separate files, your application code will need to additionally check that the leaf certificate was issued to the key.
       */
      credentialBundlePath?: string
      /**
       * @description Write the key at this path in the projected volume.
       *
       *     Most applications should use credentialBundlePath.  When using keyPath and certificateChainPath, your application needs to check that the key and leaf certificate are consistent, because it is possible to read the files mid-rotation.
       */
      keyPath?: string
      /**
       * @description The type of keypair Kubelet will generate for the pod.
       *
       *     Valid values are "RSA3072", "RSA4096", "ECDSAP256", "ECDSAP384", "ECDSAP521", and "ED25519".
       */
      keyType: string
      /**
       * Format: int32
       * @description maxExpirationSeconds is the maximum lifetime permitted for the certificate.
       *
       *     Kubelet copies this value verbatim into the PodCertificateRequests it generates for this projection.
       *
       *     If omitted, kube-apiserver will set it to 86400(24 hours). kube-apiserver will reject values shorter than 3600 (1 hour).  The maximum allowable value is 7862400 (91 days).
       *
       *     The signer implementation is then free to issue a certificate with any lifetime *shorter* than MaxExpirationSeconds, but no shorter than 3600 seconds (1 hour).  This constraint is enforced by kube-apiserver. `kubernetes.io` signers will never issue certificates with a lifetime longer than 24 hours.
       */
      maxExpirationSeconds?: number
      /** @description Kubelet's generated CSRs will be addressed to this signer. */
      signerName: string
    }
    /** @description PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
    "io.k8s.api.core.v1.PodDNSConfig": {
      /** @description A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
      nameservers?: string[]
      /** @description A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
      options?: components["schemas"]["io.k8s.api.core.v1.PodDNSConfigOption"][]
      /** @description A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
      searches?: string[]
    }
    /** @description PodDNSConfigOption defines DNS resolver options of a pod. */
    "io.k8s.api.core.v1.PodDNSConfigOption": {
      /** @description Name is this DNS resolver option's name. Required. */
      name?: string
      /** @description Value is this DNS resolver option's value. */
      value?: string
    }
    /** @description PodOS defines the OS parameters of a pod. */
    "io.k8s.api.core.v1.PodOS": {
      /**
       * @description Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null
       * @default
       */
      name: string
    }
    /** @description PodReadinessGate contains the reference to a pod condition */
    "io.k8s.api.core.v1.PodReadinessGate": {
      /**
       * @description ConditionType refers to a condition in the pod's condition list with matching type.
       * @default
       */
      conditionType: string
    }
    /**
     * @description PodResourceClaim references exactly one ResourceClaim, either directly or by naming a ResourceClaimTemplate which is then turned into a ResourceClaim for the pod.
     *
     *     It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
     */
    "io.k8s.api.core.v1.PodResourceClaim": {
      /**
       * @description Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
       * @default
       */
      name: string
      /**
       * @description ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.
       *
       *     Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
       */
      resourceClaimName?: string
      /**
       * @description ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.
       *
       *     The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
       *
       *     This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.
       *
       *     Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
       */
      resourceClaimTemplateName?: string
    }
    /** @description PodSchedulingGate is associated to a Pod to guard its scheduling. */
    "io.k8s.api.core.v1.PodSchedulingGate": {
      /**
       * @description Name of the scheduling gate. Each scheduling gate must have a unique name field.
       * @default
       */
      name: string
    }
    /** @description PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
    "io.k8s.api.core.v1.PodSecurityContext": {
      /** @description appArmorProfile is the AppArmor options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows. */
      appArmorProfile?: components["schemas"]["io.k8s.api.core.v1.AppArmorProfile"]
      /**
       * Format: int64
       * @description A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
       *
       *     1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
       *
       *     If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
       */
      fsGroup?: number
      /**
       * @description fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.
       *
       *     Possible enum values:
       *      - `"Always"` indicates that volume's ownership and permissions should always be changed whenever volume is mounted inside a Pod. This the default behavior.
       *      - `"OnRootMismatch"` indicates that volume's ownership and permissions will be changed only when permission and ownership of root directory does not match with expected permissions on the volume. This can help shorten the time it takes to change ownership and permissions of a volume.
       * @enum {string}
       */
      fsGroupChangePolicy?: "Always" | "OnRootMismatch"
      /**
       * Format: int64
       * @description The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      runAsGroup?: number
      /** @description Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
      runAsNonRoot?: boolean
      /**
       * Format: int64
       * @description The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
       */
      runAsUser?: number
      /**
       * @description seLinuxChangePolicy defines how the container's SELinux label is applied to all volumes used by the Pod. It has no effect on nodes that do not support SELinux or to volumes does not support SELinux. Valid values are "MountOption" and "Recursive".
       *
       *     "Recursive" means relabeling of all files on all Pod volumes by the container runtime. This may be slow for large volumes, but allows mixing privileged and unprivileged Pods sharing the same volume on the same node.
       *
       *     "MountOption" mounts all eligible Pod volumes with `-o context` mount option. This requires all Pods that share the same volume to use the same SELinux label. It is not possible to share the same volume among privileged and unprivileged Pods. Eligible volumes are in-tree FibreChannel and iSCSI volumes, and all CSI volumes whose CSI driver announces SELinux support by setting spec.seLinuxMount: true in their CSIDriver instance. Other volumes are always re-labelled recursively. "MountOption" value is allowed only when SELinuxMount feature gate is enabled.
       *
       *     If not specified and SELinuxMount feature gate is enabled, "MountOption" is used. If not specified and SELinuxMount feature gate is disabled, "MountOption" is used for ReadWriteOncePod volumes and "Recursive" for all other volumes.
       *
       *     This field affects only Pods that have SELinux label set, either in PodSecurityContext or in SecurityContext of all containers.
       *
       *     All Pods that use the same volume should use the same seLinuxChangePolicy, otherwise some pods can get stuck in ContainerCreating state. Note that this field cannot be set when spec.os.name is windows.
       */
      seLinuxChangePolicy?: string
      /** @description The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
      seLinuxOptions?: components["schemas"]["io.k8s.api.core.v1.SELinuxOptions"]
      /** @description The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows. */
      seccompProfile?: components["schemas"]["io.k8s.api.core.v1.SeccompProfile"]
      /** @description A list of groups applied to the first process run in each container, in addition to the container's primary GID and fsGroup (if specified).  If the SupplementalGroupsPolicy feature is enabled, the supplementalGroupsPolicy field determines whether these are in addition to or instead of any group memberships defined in the container image. If unspecified, no additional groups are added, though group memberships defined in the container image may still be used, depending on the supplementalGroupsPolicy field. Note that this field cannot be set when spec.os.name is windows. */
      supplementalGroups?: number[]
      /**
       * @description Defines how supplemental groups of the first container processes are calculated. Valid values are "Merge" and "Strict". If not specified, "Merge" is used. (Alpha) Using the field requires the SupplementalGroupsPolicy feature gate to be enabled and the container runtime must implement support for this feature. Note that this field cannot be set when spec.os.name is windows.
       *
       *     Possible enum values:
       *      - `"Merge"` means that the container's provided SupplementalGroups and FsGroup (specified in SecurityContext) will be merged with the primary user's groups as defined in the container image (in /etc/group).
       *      - `"Strict"` means that the container's provided SupplementalGroups and FsGroup (specified in SecurityContext) will be used instead of any groups defined in the container image.
       * @enum {string}
       */
      supplementalGroupsPolicy?: "Merge" | "Strict"
      /** @description Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows. */
      sysctls?: components["schemas"]["io.k8s.api.core.v1.Sysctl"][]
      /** @description The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux. */
      windowsOptions?: components["schemas"]["io.k8s.api.core.v1.WindowsSecurityContextOptions"]
    }
    /** @description PodSpec is a description of a pod. */
    "io.k8s.api.core.v1.PodSpec": {
      /**
       * Format: int64
       * @description Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
       */
      activeDeadlineSeconds?: number
      /** @description If specified, the pod's scheduling constraints */
      affinity?: components["schemas"]["io.k8s.api.core.v1.Affinity"]
      /** @description AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
      automountServiceAccountToken?: boolean
      /** @description List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
      containers: components["schemas"]["io.k8s.api.core.v1.Container"][]
      /** @description Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy. */
      dnsConfig?: components["schemas"]["io.k8s.api.core.v1.PodDNSConfig"]
      /**
       * @description Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
       *
       *     Possible enum values:
       *      - `"ClusterFirst"` indicates that the pod should use cluster DNS first unless hostNetwork is true, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
       *      - `"ClusterFirstWithHostNet"` indicates that the pod should use cluster DNS first, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
       *      - `"Default"` indicates that the pod should use the default (as determined by kubelet) DNS settings.
       *      - `"None"` indicates that the pod should use empty DNS settings. DNS parameters such as nameservers and search paths should be defined via DNSConfig.
       * @enum {string}
       */
      dnsPolicy?: "ClusterFirst" | "ClusterFirstWithHostNet" | "Default" | "None"
      /** @description EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
      enableServiceLinks?: boolean
      /** @description List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. */
      ephemeralContainers?: components["schemas"]["io.k8s.api.core.v1.EphemeralContainer"][]
      /** @description HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. */
      hostAliases?: components["schemas"]["io.k8s.api.core.v1.HostAlias"][]
      /** @description Use the host's ipc namespace. Optional: Default to false. */
      hostIPC?: boolean
      /** @description Host networking requested for this pod. Use the host's network namespace. When using HostNetwork you should specify ports so the scheduler is aware. When `hostNetwork` is true, specified `hostPort` fields in port definitions must match `containerPort`, and unspecified `hostPort` fields in port definitions are defaulted to match `containerPort`. Default to false. */
      hostNetwork?: boolean
      /** @description Use the host's pid namespace. Optional: Default to false. */
      hostPID?: boolean
      /** @description Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature. */
      hostUsers?: boolean
      /** @description Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
      hostname?: string
      /**
       * @description HostnameOverride specifies an explicit override for the pod's hostname as perceived by the pod. This field only specifies the pod's hostname and does not affect its DNS records. When this field is set to a non-empty string: - It takes precedence over the values set in `hostname` and `subdomain`. - The Pod's hostname will be set to this value. - `setHostnameAsFQDN` must be nil or set to false. - `hostNetwork` must be set to false.
       *
       *     This field must be a valid DNS subdomain as defined in RFC 1123 and contain at most 64 characters. Requires the HostnameOverride feature gate to be enabled.
       */
      hostnameOverride?: string
      /** @description ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
      imagePullSecrets?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"][]
      /** @description List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
      initContainers?: components["schemas"]["io.k8s.api.core.v1.Container"][]
      /** @description NodeName indicates in which node this pod is scheduled. If empty, this pod is a candidate for scheduling by the scheduler defined in schedulerName. Once this field is set, the kubelet for this node becomes responsible for the lifecycle of this pod. This field should not be used to express a desire for the pod to be scheduled on a specific node. https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename */
      nodeName?: string
      /** @description NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
      nodeSelector?: {
        [key: string]: string
      }
      /**
       * @description Specifies the OS of the containers in the pod. Some pod and container fields are restricted if this is set.
       *
       *     If the OS field is set to linux, the following fields must be unset: -securityContext.windowsOptions
       *
       *     If the OS field is set to windows, following fields must be unset: - spec.hostPID - spec.hostIPC - spec.hostUsers - spec.resources - spec.securityContext.appArmorProfile - spec.securityContext.seLinuxOptions - spec.securityContext.seccompProfile - spec.securityContext.fsGroup - spec.securityContext.fsGroupChangePolicy - spec.securityContext.sysctls - spec.shareProcessNamespace - spec.securityContext.runAsUser - spec.securityContext.runAsGroup - spec.securityContext.supplementalGroups - spec.securityContext.supplementalGroupsPolicy - spec.containers[*].securityContext.appArmorProfile - spec.containers[*].securityContext.seLinuxOptions - spec.containers[*].securityContext.seccompProfile - spec.containers[*].securityContext.capabilities - spec.containers[*].securityContext.readOnlyRootFilesystem - spec.containers[*].securityContext.privileged - spec.containers[*].securityContext.allowPrivilegeEscalation - spec.containers[*].securityContext.procMount - spec.containers[*].securityContext.runAsUser - spec.containers[*].securityContext.runAsGroup
       */
      os?: components["schemas"]["io.k8s.api.core.v1.PodOS"]
      /** @description Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md */
      overhead?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
      /**
       * @description PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
       *
       *     Possible enum values:
       *      - `"Never"` means that pod never preempts other pods with lower priority.
       *      - `"PreemptLowerPriority"` means that pod can preempt other pods with lower priority.
       * @enum {string}
       */
      preemptionPolicy?: "Never" | "PreemptLowerPriority"
      /**
       * Format: int32
       * @description The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
       */
      priority?: number
      /** @description If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
      priorityClassName?: string
      /** @description If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
      readinessGates?: components["schemas"]["io.k8s.api.core.v1.PodReadinessGate"][]
      /**
       * @description ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.
       *
       *     This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
       *
       *     This field is immutable.
       */
      resourceClaims?: components["schemas"]["io.k8s.api.core.v1.PodResourceClaim"][]
      /**
       * @description Resources is the total amount of CPU and Memory resources required by all containers in the pod. It supports specifying Requests and Limits for "cpu", "memory" and "hugepages-" resource names only. ResourceClaims are not supported.
       *
       *     This field enables fine-grained control over resource allocation for the entire pod, allowing resource sharing among containers in a pod.
       *
       *     This is an alpha field and requires enabling the PodLevelResources feature gate.
       */
      resources?: components["schemas"]["io.k8s.api.core.v1.ResourceRequirements"]
      /**
       * @description Restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
       *
       *     Possible enum values:
       *      - `"Always"`
       *      - `"Never"`
       *      - `"OnFailure"`
       * @enum {string}
       */
      restartPolicy?: "Always" | "Never" | "OnFailure"
      /** @description RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class */
      runtimeClassName?: string
      /** @description If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
      schedulerName?: string
      /**
       * @description SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.
       *
       *     SchedulingGates can only be set at pod creation time, and be removed only afterwards.
       */
      schedulingGates?: components["schemas"]["io.k8s.api.core.v1.PodSchedulingGate"][]
      /** @description SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field. */
      securityContext?: components["schemas"]["io.k8s.api.core.v1.PodSecurityContext"]
      /** @description DeprecatedServiceAccount is a deprecated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
      serviceAccount?: string
      /** @description ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
      serviceAccountName?: string
      /** @description If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
      setHostnameAsFQDN?: boolean
      /** @description Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
      shareProcessNamespace?: boolean
      /** @description If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
      subdomain?: string
      /**
       * Format: int64
       * @description Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
       */
      terminationGracePeriodSeconds?: number
      /** @description If specified, the pod's tolerations. */
      tolerations?: components["schemas"]["io.k8s.api.core.v1.Toleration"][]
      /** @description TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
      topologySpreadConstraints?: components["schemas"]["io.k8s.api.core.v1.TopologySpreadConstraint"][]
      /** @description List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
      volumes?: components["schemas"]["io.k8s.api.core.v1.Volume"][]
    }
    /** @description PodTemplateSpec describes the data a pod should have when created from a template */
    "io.k8s.api.core.v1.PodTemplateSpec": {
      /**
       * @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.core.v1.PodSpec"]
    }
    /** @description PortworxVolumeSource represents a Portworx volume resource. */
    "io.k8s.api.core.v1.PortworxVolumeSource": {
      /** @description fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
      fsType?: string
      /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
      readOnly?: boolean
      /**
       * @description volumeID uniquely identifies a Portworx volume
       * @default
       */
      volumeID: string
    }
    /** @description An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
    "io.k8s.api.core.v1.PreferredSchedulingTerm": {
      /**
       * @description A node selector term, associated with the corresponding weight.
       * @default {}
       */
      preference: components["schemas"]["io.k8s.api.core.v1.NodeSelectorTerm"]
      /**
       * Format: int32
       * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
       * @default 0
       */
      weight: number
    }
    /** @description Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
    "io.k8s.api.core.v1.Probe": {
      /** @description Exec specifies a command to execute in the container. */
      exec?: components["schemas"]["io.k8s.api.core.v1.ExecAction"]
      /**
       * Format: int32
       * @description Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
       */
      failureThreshold?: number
      /** @description GRPC specifies a GRPC HealthCheckRequest. */
      grpc?: components["schemas"]["io.k8s.api.core.v1.GRPCAction"]
      /** @description HTTPGet specifies an HTTP GET request to perform. */
      httpGet?: components["schemas"]["io.k8s.api.core.v1.HTTPGetAction"]
      /**
       * Format: int32
       * @description Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
       */
      initialDelaySeconds?: number
      /**
       * Format: int32
       * @description How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
       */
      periodSeconds?: number
      /**
       * Format: int32
       * @description Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
       */
      successThreshold?: number
      /** @description TCPSocket specifies a connection to a TCP port. */
      tcpSocket?: components["schemas"]["io.k8s.api.core.v1.TCPSocketAction"]
      /**
       * Format: int64
       * @description Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
       */
      terminationGracePeriodSeconds?: number
      /**
       * Format: int32
       * @description Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
       */
      timeoutSeconds?: number
    }
    /** @description Represents a projected volume source */
    "io.k8s.api.core.v1.ProjectedVolumeSource": {
      /**
       * Format: int32
       * @description defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
       */
      defaultMode?: number
      /** @description sources is the list of volume projections. Each entry in this list handles one source. */
      sources?: components["schemas"]["io.k8s.api.core.v1.VolumeProjection"][]
    }
    /** @description Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
    "io.k8s.api.core.v1.QuobyteVolumeSource": {
      /** @description group to map volume access to Default is no group */
      group?: string
      /** @description readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
      readOnly?: boolean
      /**
       * @description registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
       * @default
       */
      registry: string
      /** @description tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
      tenant?: string
      /** @description user to map volume access to Defaults to serivceaccount user */
      user?: string
      /**
       * @description volume is a string that references an already created Quobyte volume by name.
       * @default
       */
      volume: string
    }
    /** @description Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
    "io.k8s.api.core.v1.RBDVolumeSource": {
      /** @description fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
      fsType?: string
      /**
       * @description image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
       * @default
       */
      image: string
      /**
       * @description keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
       * @default /etc/ceph/keyring
       */
      keyring: string
      /** @description monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
      monitors: string[]
      /**
       * @description pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
       * @default rbd
       */
      pool: string
      /** @description readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
      readOnly?: boolean
      /** @description secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /**
       * @description user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
       * @default admin
       */
      user: string
    }
    /** @description ResourceClaim references one entry in PodSpec.ResourceClaims. */
    "io.k8s.api.core.v1.ResourceClaim": {
      /**
       * @description Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
       * @default
       */
      name: string
      /** @description Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request. */
      request?: string
    }
    /** @description ResourceFieldSelector represents container resources (cpu, memory) and their output format */
    "io.k8s.api.core.v1.ResourceFieldSelector": {
      /** @description Container name: required for volumes, optional for env vars */
      containerName?: string
      /** @description Specifies the output format of the exposed resources, defaults to "1" */
      divisor?: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      /**
       * @description Required: resource to select
       * @default
       */
      resource: string
    }
    /** @description ResourceRequirements describes the compute resource requirements. */
    "io.k8s.api.core.v1.ResourceRequirements": {
      /**
       * @description Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
       *
       *     This field depends on the DynamicResourceAllocation feature gate.
       *
       *     This field is immutable. It can only be set for containers.
       */
      claims?: components["schemas"]["io.k8s.api.core.v1.ResourceClaim"][]
      /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
      limits?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
      /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
      requests?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
    }
    /** @description SELinuxOptions are the labels to be applied to the container */
    "io.k8s.api.core.v1.SELinuxOptions": {
      /** @description Level is SELinux level label that applies to the container. */
      level?: string
      /** @description Role is a SELinux role label that applies to the container. */
      role?: string
      /** @description Type is a SELinux type label that applies to the container. */
      type?: string
      /** @description User is a SELinux user label that applies to the container. */
      user?: string
    }
    /** @description ScaleIOVolumeSource represents a persistent ScaleIO volume */
    "io.k8s.api.core.v1.ScaleIOVolumeSource": {
      /**
       * @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
       * @default xfs
       */
      fsType: string
      /**
       * @description gateway is the host address of the ScaleIO API Gateway.
       * @default
       */
      gateway: string
      /** @description protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. */
      protectionDomain?: string
      /** @description readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
      readOnly?: boolean
      /** @description secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail. */
      secretRef: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /** @description sslEnabled Flag enable/disable SSL communication with Gateway, default false */
      sslEnabled?: boolean
      /**
       * @description storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
       * @default ThinProvisioned
       */
      storageMode: string
      /** @description storagePool is the ScaleIO Storage Pool associated with the protection domain. */
      storagePool?: string
      /**
       * @description system is the name of the storage system as configured in ScaleIO.
       * @default
       */
      system: string
      /** @description volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source. */
      volumeName?: string
    }
    /** @description SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
    "io.k8s.api.core.v1.SeccompProfile": {
      /** @description localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is "Localhost". Must NOT be set for any other type. */
      localhostProfile?: string
      /**
       * @description type indicates which kind of seccomp profile will be applied. Valid options are:
       *
       *     Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
       *
       *     Possible enum values:
       *      - `"Localhost"` indicates a profile defined in a file on the node should be used. The file's location relative to <kubelet-root-dir>/seccomp.
       *      - `"RuntimeDefault"` represents the default container runtime seccomp profile.
       *      - `"Unconfined"` indicates no seccomp profile is applied (A.K.A. unconfined).
       * @default
       * @enum {string}
       */
      type: "Localhost" | "RuntimeDefault" | "Unconfined"
    }
    /**
     * @description SecretEnvSource selects a Secret to populate the environment variables with.
     *
     *     The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
     */
    "io.k8s.api.core.v1.SecretEnvSource": {
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description Specify whether the Secret must be defined */
      optional?: boolean
    }
    /** @description SecretKeySelector selects a key of a Secret. */
    "io.k8s.api.core.v1.SecretKeySelector": {
      /**
       * @description The key of the secret to select from.  Must be a valid secret key.
       * @default
       */
      key: string
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description Specify whether the Secret or its key must be defined */
      optional?: boolean
    }
    /**
     * @description Adapts a secret into a projected volume.
     *
     *     The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
     */
    "io.k8s.api.core.v1.SecretProjection": {
      /** @description items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
      items?: components["schemas"]["io.k8s.api.core.v1.KeyToPath"][]
      /**
       * @description Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description optional field specify whether the Secret or its key must be defined */
      optional?: boolean
    }
    /**
     * @description Adapts a Secret into a volume.
     *
     *     The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
     */
    "io.k8s.api.core.v1.SecretVolumeSource": {
      /**
       * Format: int32
       * @description defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
       */
      defaultMode?: number
      /** @description items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
      items?: components["schemas"]["io.k8s.api.core.v1.KeyToPath"][]
      /** @description optional field specify whether the Secret or its keys must be defined */
      optional?: boolean
      /** @description secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
      secretName?: string
    }
    /** @description SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
    "io.k8s.api.core.v1.SecurityContext": {
      /** @description AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
      allowPrivilegeEscalation?: boolean
      /** @description appArmorProfile is the AppArmor options to use by this container. If set, this profile overrides the pod's appArmorProfile. Note that this field cannot be set when spec.os.name is windows. */
      appArmorProfile?: components["schemas"]["io.k8s.api.core.v1.AppArmorProfile"]
      /** @description The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows. */
      capabilities?: components["schemas"]["io.k8s.api.core.v1.Capabilities"]
      /** @description Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
      privileged?: boolean
      /**
       * @description procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
       *
       *     Possible enum values:
       *      - `"Default"` uses the container runtime defaults for readonly and masked paths for /proc. Most container runtimes mask certain paths in /proc to avoid accidental security exposure of special devices or information.
       *      - `"Unmasked"` bypasses the default masking behavior of the container runtime and ensures the newly created /proc the container stays in tact with no modifications.
       * @enum {string}
       */
      procMount?: "Default" | "Unmasked"
      /** @description Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
      readOnlyRootFilesystem?: boolean
      /**
       * Format: int64
       * @description The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      runAsGroup?: number
      /** @description Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
      runAsNonRoot?: boolean
      /**
       * Format: int64
       * @description The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
       */
      runAsUser?: number
      /** @description The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
      seLinuxOptions?: components["schemas"]["io.k8s.api.core.v1.SELinuxOptions"]
      /** @description The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows. */
      seccompProfile?: components["schemas"]["io.k8s.api.core.v1.SeccompProfile"]
      /** @description The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux. */
      windowsOptions?: components["schemas"]["io.k8s.api.core.v1.WindowsSecurityContextOptions"]
    }
    /** @description ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
    "io.k8s.api.core.v1.ServiceAccountTokenProjection": {
      /** @description audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
      audience?: string
      /**
       * Format: int64
       * @description expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
       */
      expirationSeconds?: number
      /**
       * @description path is the path relative to the mount point of the file to project the token into.
       * @default
       */
      path: string
    }
    /** @description SleepAction describes a "sleep" action. */
    "io.k8s.api.core.v1.SleepAction": {
      /**
       * Format: int64
       * @description Seconds is the number of seconds to sleep.
       * @default 0
       */
      seconds: number
    }
    /** @description Represents a StorageOS persistent volume resource. */
    "io.k8s.api.core.v1.StorageOSVolumeSource": {
      /** @description fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
      fsType?: string
      /** @description readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
      readOnly?: boolean
      /** @description secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted. */
      secretRef?: components["schemas"]["io.k8s.api.core.v1.LocalObjectReference"]
      /** @description volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
      volumeName?: string
      /** @description volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
      volumeNamespace?: string
    }
    /** @description Sysctl defines a kernel parameter to be set */
    "io.k8s.api.core.v1.Sysctl": {
      /**
       * @description Name of a property to set
       * @default
       */
      name: string
      /**
       * @description Value of a property to set
       * @default
       */
      value: string
    }
    /** @description TCPSocketAction describes an action based on opening a socket */
    "io.k8s.api.core.v1.TCPSocketAction": {
      /** @description Optional: Host name to connect to, defaults to the pod IP. */
      host?: string
      /** @description Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
      port: components["schemas"]["io.k8s.apimachinery.pkg.util.intstr.IntOrString"]
    }
    /** @description The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
    "io.k8s.api.core.v1.Toleration": {
      /**
       * @description Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
       *
       *     Possible enum values:
       *      - `"NoExecute"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.
       *      - `"NoSchedule"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.
       *      - `"PreferNoSchedule"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
       * @enum {string}
       */
      effect?: "NoExecute" | "NoSchedule" | "PreferNoSchedule"
      /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
      key?: string
      /**
       * @description Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
       *
       *     Possible enum values:
       *      - `"Equal"`
       *      - `"Exists"`
       * @enum {string}
       */
      operator?: "Equal" | "Exists"
      /**
       * Format: int64
       * @description TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
       */
      tolerationSeconds?: number
      /** @description Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
      value?: string
    }
    /** @description TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
    "io.k8s.api.core.v1.TopologySpreadConstraint": {
      /** @description LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain. */
      labelSelector?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"]
      /**
       * @description MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector.
       *
       *     This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
       */
      matchLabelKeys?: string[]
      /**
       * Format: int32
       * @description MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | |  P P  |  P P  |   P   | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
       * @default 0
       */
      maxSkew: number
      /**
       * Format: int32
       * @description MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
       *
       *     For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | |  P P  |  P P  |  P P  | The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
       */
      minDomains?: number
      /**
       * @description NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
       *
       *     If this value is nil, the behavior is equivalent to the Honor policy.
       *
       *     Possible enum values:
       *      - `"Honor"` means use this scheduling directive when calculating pod topology spread skew.
       *      - `"Ignore"` means ignore this scheduling directive when calculating pod topology spread skew.
       * @enum {string}
       */
      nodeAffinityPolicy?: "Honor" | "Ignore"
      /**
       * @description NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included.
       *
       *     If this value is nil, the behavior is equivalent to the Ignore policy.
       *
       *     Possible enum values:
       *      - `"Honor"` means use this scheduling directive when calculating pod topology spread skew.
       *      - `"Ignore"` means ignore this scheduling directive when calculating pod topology spread skew.
       * @enum {string}
       */
      nodeTaintsPolicy?: "Honor" | "Ignore"
      /**
       * @description TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology. And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology. It's a required field.
       * @default
       */
      topologyKey: string
      /**
       * @description WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,
       *       but giving higher precedence to topologies that would help reduce the
       *       skew.
       *     A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
       *
       *     Possible enum values:
       *      - `"DoNotSchedule"` instructs the scheduler not to schedule the pod when constraints are not satisfied.
       *      - `"ScheduleAnyway"` instructs the scheduler to schedule the pod even if constraints are not satisfied.
       * @default
       * @enum {string}
       */
      whenUnsatisfiable: "DoNotSchedule" | "ScheduleAnyway"
    }
    /** @description TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
    "io.k8s.api.core.v1.TypedLocalObjectReference": {
      /** @description APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
      apiGroup?: string
      /**
       * @description Kind is the type of resource being referenced
       * @default
       */
      kind: string
      /**
       * @description Name is the name of resource being referenced
       * @default
       */
      name: string
    }
    /** @description TypedObjectReference contains enough information to let you locate the typed referenced object */
    "io.k8s.api.core.v1.TypedObjectReference": {
      /** @description APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
      apiGroup?: string
      /**
       * @description Kind is the type of resource being referenced
       * @default
       */
      kind: string
      /**
       * @description Name is the name of resource being referenced
       * @default
       */
      name: string
      /** @description Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled. */
      namespace?: string
    }
    /** @description Volume represents a named volume in a pod that may be accessed by any container in the pod. */
    "io.k8s.api.core.v1.Volume": {
      /** @description awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
      awsElasticBlockStore?: components["schemas"]["io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource"]
      /** @description azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver. */
      azureDisk?: components["schemas"]["io.k8s.api.core.v1.AzureDiskVolumeSource"]
      /** @description azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver. */
      azureFile?: components["schemas"]["io.k8s.api.core.v1.AzureFileVolumeSource"]
      /** @description cephFS represents a Ceph FS mount on the host that shares a pod's lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported. */
      cephfs?: components["schemas"]["io.k8s.api.core.v1.CephFSVolumeSource"]
      /** @description cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
      cinder?: components["schemas"]["io.k8s.api.core.v1.CinderVolumeSource"]
      /** @description configMap represents a configMap that should populate this volume */
      configMap?: components["schemas"]["io.k8s.api.core.v1.ConfigMapVolumeSource"]
      /** @description csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers. */
      csi?: components["schemas"]["io.k8s.api.core.v1.CSIVolumeSource"]
      /** @description downwardAPI represents downward API about the pod that should populate this volume */
      downwardAPI?: components["schemas"]["io.k8s.api.core.v1.DownwardAPIVolumeSource"]
      /** @description emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
      emptyDir?: components["schemas"]["io.k8s.api.core.v1.EmptyDirVolumeSource"]
      /**
       * @description ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.
       *
       *     Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity
       *        tracking are needed,
       *     c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through
       *        a PersistentVolumeClaim (see EphemeralVolumeSource for more
       *        information on the connection between this volume type
       *        and PersistentVolumeClaim).
       *
       *     Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.
       *
       *     Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.
       *
       *     A pod can use both types of ephemeral volumes and persistent volumes at the same time.
       */
      ephemeral?: components["schemas"]["io.k8s.api.core.v1.EphemeralVolumeSource"]
      /** @description fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
      fc?: components["schemas"]["io.k8s.api.core.v1.FCVolumeSource"]
      /** @description flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead. */
      flexVolume?: components["schemas"]["io.k8s.api.core.v1.FlexVolumeSource"]
      /** @description flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported. */
      flocker?: components["schemas"]["io.k8s.api.core.v1.FlockerVolumeSource"]
      /** @description gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
      gcePersistentDisk?: components["schemas"]["io.k8s.api.core.v1.GCEPersistentDiskVolumeSource"]
      /** @description gitRepo represents a git repository at a particular revision. Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
      gitRepo?: components["schemas"]["io.k8s.api.core.v1.GitRepoVolumeSource"]
      /** @description glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. */
      glusterfs?: components["schemas"]["io.k8s.api.core.v1.GlusterfsVolumeSource"]
      /** @description hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
      hostPath?: components["schemas"]["io.k8s.api.core.v1.HostPathVolumeSource"]
      /**
       * @description image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:
       *
       *     - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
       *
       *     The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath) before 1.33. The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
       */
      image?: components["schemas"]["io.k8s.api.core.v1.ImageVolumeSource"]
      /** @description iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes/#iscsi */
      iscsi?: components["schemas"]["io.k8s.api.core.v1.ISCSIVolumeSource"]
      /**
       * @description name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       * @default
       */
      name: string
      /** @description nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
      nfs?: components["schemas"]["io.k8s.api.core.v1.NFSVolumeSource"]
      /** @description persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
      persistentVolumeClaim?: components["schemas"]["io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource"]
      /** @description photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported. */
      photonPersistentDisk?: components["schemas"]["io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource"]
      /** @description portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on. */
      portworxVolume?: components["schemas"]["io.k8s.api.core.v1.PortworxVolumeSource"]
      /** @description projected items for all in one resources secrets, configmaps, and downward API */
      projected?: components["schemas"]["io.k8s.api.core.v1.ProjectedVolumeSource"]
      /** @description quobyte represents a Quobyte mount on the host that shares a pod's lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported. */
      quobyte?: components["schemas"]["io.k8s.api.core.v1.QuobyteVolumeSource"]
      /** @description rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. */
      rbd?: components["schemas"]["io.k8s.api.core.v1.RBDVolumeSource"]
      /** @description scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported. */
      scaleIO?: components["schemas"]["io.k8s.api.core.v1.ScaleIOVolumeSource"]
      /** @description secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
      secret?: components["schemas"]["io.k8s.api.core.v1.SecretVolumeSource"]
      /** @description storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. */
      storageos?: components["schemas"]["io.k8s.api.core.v1.StorageOSVolumeSource"]
      /** @description vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver. */
      vsphereVolume?: components["schemas"]["io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource"]
    }
    /** @description volumeDevice describes a mapping of a raw block device within a container. */
    "io.k8s.api.core.v1.VolumeDevice": {
      /**
       * @description devicePath is the path inside of the container that the device will be mapped to.
       * @default
       */
      devicePath: string
      /**
       * @description name must match the name of a persistentVolumeClaim in the pod
       * @default
       */
      name: string
    }
    /** @description VolumeMount describes a mounting of a Volume within a container. */
    "io.k8s.api.core.v1.VolumeMount": {
      /**
       * @description Path within the container at which the volume should be mounted.  Must not contain ':'.
       * @default
       */
      mountPath: string
      /**
       * @description mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
       *
       *     Possible enum values:
       *      - `"Bidirectional"` means that the volume in a container will receive new mounts from the host or other containers, and its own mounts will be propagated from the container to the host or other containers. Note that this mode is recursively applied to all mounts in the volume ("rshared" in Linux terminology).
       *      - `"HostToContainer"` means that the volume in a container will receive new mounts from the host or other containers, but filesystems mounted inside the container won't be propagated to the host or other containers. Note that this mode is recursively applied to all mounts in the volume ("rslave" in Linux terminology).
       *      - `"None"` means that the volume in a container will not receive new mounts from the host or other containers, and filesystems mounted inside the container won't be propagated to the host or other containers. Note that this mode corresponds to "private" in Linux terminology.
       * @enum {string}
       */
      mountPropagation?: "Bidirectional" | "HostToContainer" | "None"
      /**
       * @description This must match the Name of a Volume.
       * @default
       */
      name: string
      /** @description Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
      readOnly?: boolean
      /**
       * @description RecursiveReadOnly specifies whether read-only mounts should be handled recursively.
       *
       *     If ReadOnly is false, this field has no meaning and must be unspecified.
       *
       *     If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.
       *
       *     If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).
       *
       *     If this field is not specified, it is treated as an equivalent of Disabled.
       */
      recursiveReadOnly?: string
      /** @description Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
      subPath?: string
      /** @description Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
      subPathExpr?: string
    }
    /** @description Projection that may be projected along with other supported volume types. Exactly one of these fields must be set. */
    "io.k8s.api.core.v1.VolumeProjection": {
      /**
       * @description ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.
       *
       *     Alpha, gated by the ClusterTrustBundleProjection feature gate.
       *
       *     ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.
       *
       *     Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
       */
      clusterTrustBundle?: components["schemas"]["io.k8s.api.core.v1.ClusterTrustBundleProjection"]
      /** @description configMap information about the configMap data to project */
      configMap?: components["schemas"]["io.k8s.api.core.v1.ConfigMapProjection"]
      /** @description downwardAPI information about the downwardAPI data to project */
      downwardAPI?: components["schemas"]["io.k8s.api.core.v1.DownwardAPIProjection"]
      /**
       * @description Projects an auto-rotating credential bundle (private key and certificate chain) that the pod can use either as a TLS client or server.
       *
       *     Kubelet generates a private key and uses it to send a PodCertificateRequest to the named signer.  Once the signer approves the request and issues a certificate chain, Kubelet writes the key and certificate chain to the pod filesystem.  The pod does not start until certificates have been issued for each podCertificate projected volume source in its spec.
       *
       *     Kubelet will begin trying to rotate the certificate at the time indicated by the signer using the PodCertificateRequest.Status.BeginRefreshAt timestamp.
       *
       *     Kubelet can write a single file, indicated by the credentialBundlePath field, or separate files, indicated by the keyPath and certificateChainPath fields.
       *
       *     The credential bundle is a single file in PEM format.  The first PEM entry is the private key (in PKCS#8 format), and the remaining PEM entries are the certificate chain issued by the signer (typically, signers will return their certificate chain in leaf-to-root order).
       *
       *     Prefer using the credential bundle format, since your application code can read it atomically.  If you use keyPath and certificateChainPath, your application must make two separate file reads. If these coincide with a certificate rotation, it is possible that the private key and leaf certificate you read may not correspond to each other.  Your application will need to check for this condition, and re-read until they are consistent.
       *
       *     The named signer controls chooses the format of the certificate it issues; consult the signer implementation's documentation to learn how to use the certificates it issues.
       */
      podCertificate?: components["schemas"]["io.k8s.api.core.v1.PodCertificateProjection"]
      /** @description secret information about the secret data to project */
      secret?: components["schemas"]["io.k8s.api.core.v1.SecretProjection"]
      /** @description serviceAccountToken is information about the serviceAccountToken data to project */
      serviceAccountToken?: components["schemas"]["io.k8s.api.core.v1.ServiceAccountTokenProjection"]
    }
    /** @description VolumeResourceRequirements describes the storage resource requirements for a volume. */
    "io.k8s.api.core.v1.VolumeResourceRequirements": {
      /** @description Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
      limits?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
      /** @description Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
      requests?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
    }
    /** @description Represents a vSphere volume resource. */
    "io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource": {
      /** @description fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
      fsType?: string
      /** @description storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
      storagePolicyID?: string
      /** @description storagePolicyName is the storage Policy Based Management (SPBM) profile name. */
      storagePolicyName?: string
      /**
       * @description volumePath is the path that identifies vSphere volume vmdk
       * @default
       */
      volumePath: string
    }
    /** @description The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
    "io.k8s.api.core.v1.WeightedPodAffinityTerm": {
      /**
       * @description Required. A pod affinity term, associated with the corresponding weight.
       * @default {}
       */
      podAffinityTerm: components["schemas"]["io.k8s.api.core.v1.PodAffinityTerm"]
      /**
       * Format: int32
       * @description weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
       * @default 0
       */
      weight: number
    }
    /** @description WindowsSecurityContextOptions contain Windows-specific options and credentials. */
    "io.k8s.api.core.v1.WindowsSecurityContextOptions": {
      /** @description GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
      gmsaCredentialSpec?: string
      /** @description GMSACredentialSpecName is the name of the GMSA credential spec to use. */
      gmsaCredentialSpecName?: string
      /** @description HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true. */
      hostProcess?: boolean
      /** @description The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
      runAsUserName?: string
    }
    /**
     * @description Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     *     The serialization format is:
     *
     *     ``` <quantity>        ::= <signedNumber><suffix>
     *
     *     	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     *
     *     <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *
     *     	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     *
     *     <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *
     *     	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     *
     *     <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
     *
     *     No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     *     When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     *     Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *
     *     - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
     *
     *     The sign will be omitted unless the number is negative.
     *
     *     Examples:
     *
     *     - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
     *
     *     Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     *     Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     *     This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     */
    "io.k8s.apimachinery.pkg.api.resource.Quantity": string | number
    /** @description APIResource specifies the name of a resource and whether it is namespaced. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.APIResource": {
      /** @description categories is a list of the grouped resources this resource belongs to (e.g. 'all') */
      categories?: string[]
      /** @description group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale". */
      group?: string
      /**
       * @description kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')
       * @default
       */
      kind: string
      /**
       * @description name is the plural name of the resource.
       * @default
       */
      name: string
      /**
       * @description namespaced indicates if a resource is namespaced or not.
       * @default false
       */
      namespaced: boolean
      /** @description shortNames is a list of suggested short names of the resource. */
      shortNames?: string[]
      /**
       * @description singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.
       * @default
       */
      singularName: string
      /** @description The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates. */
      storageVersionHash?: string
      /** @description verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) */
      verbs: string[]
      /** @description version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)". */
      version?: string
    }
    /** @description APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /**
       * @description groupVersion is the group and version this APIResourceList is for.
       * @default
       */
      groupVersion: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description resources contains the name of the resources and if they are namespaced. */
      resources: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.APIResource"][]
    }
    /** @description DeleteOptions may be provided when deleting an API object. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
      dryRun?: string[]
      /**
       * Format: int64
       * @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
       */
      gracePeriodSeconds?: number
      /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
      ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
      orphanDependents?: boolean
      /** @description Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned. */
      preconditions?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions"]
      /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
      propagationPolicy?: string
    }
    /**
     * @description FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
     *
     *     Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
     *
     *     The exact format is defined in sigs.k8s.io/structured-merge-diff
     */
    "io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1": Record<string, never>
    /** @description A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector": {
      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
      matchExpressions?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement"][]
      /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
      matchLabels?: {
        [key: string]: string
      }
    }
    /** @description A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement": {
      /**
       * @description key is the label key that the selector applies to.
       * @default
       */
      key: string
      /**
       * @description operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
       * @default
       */
      operator: string
      /** @description values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
      values?: string[]
    }
    /** @description ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta": {
      /** @description continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message. */
      continue?: string
      /**
       * Format: int64
       * @description remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
       */
      remainingItemCount?: number
      /** @description String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
      resourceVersion?: string
      /** @description Deprecated: selfLink is a legacy read-only field that is no longer populated by the system. */
      selfLink?: string
    }
    /** @description ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry": {
      /** @description APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
      apiVersion?: string
      /** @description FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
      fieldsType?: string
      /** @description FieldsV1 holds the first JSON version format as described in the "FieldsV1" type. */
      fieldsV1?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1"]
      /** @description Manager is an identifier of the workflow managing these fields. */
      manager?: string
      /** @description Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
      operation?: string
      /** @description Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. */
      subresource?: string
      /** @description Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over. */
      time?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
    }
    /** @description ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta": {
      /** @description Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations */
      annotations?: {
        [key: string]: string
      }
      /**
       * @description CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
       *
       *     Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      creationTimestamp?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /**
       * Format: int64
       * @description Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
       */
      deletionGracePeriodSeconds?: number
      /**
       * @description DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
       *
       *     Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      deletionTimestamp?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
      finalizers?: string[]
      /**
       * @description GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
       *
       *     If this field is specified and the generated name exists, the server will return a 409.
       *
       *     Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
       */
      generateName?: string
      /**
       * Format: int64
       * @description A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
       */
      generation?: number
      /** @description Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels */
      labels?: {
        [key: string]: string
      }
      /** @description ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
      managedFields?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry"][]
      /** @description Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names */
      name?: string
      /**
       * @description Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
       *
       *     Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
       */
      namespace?: string
      /** @description List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
      ownerReferences?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference"][]
      /**
       * @description An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
       *
       *     Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      resourceVersion?: string
      /** @description Deprecated: selfLink is a legacy read-only field that is no longer populated by the system. */
      selfLink?: string
      /**
       * @description UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
       *
       *     Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid?: string
    }
    /** @description OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference": {
      /**
       * @description API version of the referent.
       * @default
       */
      apiVersion: string
      /** @description If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
      blockOwnerDeletion?: boolean
      /** @description If true, this reference points to the managing controller. */
      controller?: boolean
      /**
       * @description Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       * @default
       */
      kind: string
      /**
       * @description Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       * @default
       */
      name: string
      /**
       * @description UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       * @default
       */
      uid: string
    }
    /** @description Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.Patch": Record<string, never>
    /** @description Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions": {
      /** @description Specifies the target ResourceVersion */
      resourceVersion?: string
      /** @description Specifies the target UID. */
      uid?: string
    }
    /** @description Status is a return value for calls that don't return other objects. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.Status": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /**
       * Format: int32
       * @description Suggested HTTP return code for this status, 0 if not set.
       */
      code?: number
      /** @description Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type. */
      details?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails"]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description A human-readable description of the status of this operation. */
      message?: string
      /**
       * @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
      /** @description A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
      reason?: string
      /** @description Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
      status?: string
    }
    /** @description StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause": {
      /**
       * @description The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
       *
       *     Examples:
       *       "name" - the field "name" on the current resource
       *       "items[0].name" - the field "name" on the first array entry in "items"
       */
      field?: string
      /** @description A human-readable description of the cause of the error.  This field may be presented as-is to a reader. */
      message?: string
      /** @description A machine-readable description of the cause of the error. If this value is empty there is no information available. */
      reason?: string
    }
    /** @description StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails": {
      /** @description The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
      causes?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause"][]
      /** @description The group attribute of the resource associated with the status StatusReason. */
      group?: string
      /** @description The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
      name?: string
      /**
       * Format: int32
       * @description If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
       */
      retryAfterSeconds?: number
      /** @description UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids */
      uid?: string
    }
    /**
     * Format: date-time
     * @description Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    "io.k8s.apimachinery.pkg.apis.meta.v1.Time": string
    /** @description Event represents a single event to a watched resource. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent": {
      /**
       * @description Object is:
       *      * If Type is Added or Modified: the new state of the object.
       *      * If Type is Deleted: the state of the object immediately before deletion.
       *      * If Type is Error: *Status is recommended; other types may make sense
       *        depending on context.
       */
      object: components["schemas"]["io.k8s.apimachinery.pkg.runtime.RawExtension"]
      /** @default  */
      type: string
    }
    /**
     * @description RawExtension is used to hold extensions in external versions.
     *
     *     To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
     *
     *     // Internal package:
     *
     *     	type MyAPIObject struct {
     *     		runtime.TypeMeta `json:",inline"`
     *     		MyPlugin runtime.Object `json:"myPlugin"`
     *     	}
     *
     *     	type PluginA struct {
     *     		AOption string `json:"aOption"`
     *     	}
     *
     *     // External package:
     *
     *     	type MyAPIObject struct {
     *     		runtime.TypeMeta `json:",inline"`
     *     		MyPlugin runtime.RawExtension `json:"myPlugin"`
     *     	}
     *
     *     	type PluginA struct {
     *     		AOption string `json:"aOption"`
     *     	}
     *
     *     // On the wire, the JSON will look something like this:
     *
     *     	{
     *     		"kind":"MyAPIObject",
     *     		"apiVersion":"v1",
     *     		"myPlugin": {
     *     			"kind":"PluginA",
     *     			"aOption":"foo",
     *     		},
     *     	}
     *
     *     So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
     */
    "io.k8s.apimachinery.pkg.runtime.RawExtension": Record<string, never>
    /**
     * Format: int-or-string
     * @description IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     */
    "io.k8s.apimachinery.pkg.util.intstr.IntOrString": number | string
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getAppsV1APIResources: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1ControllerRevisionForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1DaemonSetForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1DeploymentForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  createAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1CollectionNamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  createAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1CollectionNamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedDaemonSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedDaemonSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedDaemonSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DaemonSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.DeploymentList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  createAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1CollectionNamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedDeploymentScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedDeploymentScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedDeploymentScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedDeploymentStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedDeploymentStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedDeploymentStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.Deployment"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  createAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1CollectionNamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedReplicaSetScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedReplicaSetScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedReplicaSetScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedReplicaSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedReplicaSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedReplicaSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  createAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1CollectionNamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
        gracePeriodSeconds?: number
        /** @description if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it */
        ignoreStoreReadErrorWithClusterBreakingPotential?: boolean
        /** @description Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
        orphanDependents?: boolean
        /** @description Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
        propagationPolicy?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "*/*": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedStatefulSetScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedStatefulSetScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedStatefulSetScale: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the Scale */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
          "application/yaml": components["schemas"]["io.k8s.api.autoscaling.v1.Scale"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  readAppsV1NamespacedStatefulSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  replaceAppsV1NamespacedStatefulSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  patchAppsV1NamespacedStatefulSetStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
        dryRun?: string
        /** @description fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
        fieldManager?: string
        /** @description fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
        fieldValidation?: string
        /** @description Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
        force?: boolean
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/strategic-merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSet"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1ReplicaSetForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  listAppsV1StatefulSetForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
          "application/yaml": components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1ControllerRevisionListForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1DaemonSetListForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1DeploymentListForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedControllerRevisionList: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedControllerRevision: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the ControllerRevision */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedDaemonSetList: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedDaemonSet: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the DaemonSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedDeploymentList: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedDeployment: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the Deployment */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedReplicaSetList: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedReplicaSet: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the ReplicaSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedStatefulSetList: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1NamespacedStatefulSet: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path: {
        /** @description name of the StatefulSet */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1ReplicaSetListForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  watchAppsV1StatefulSetListForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /**
         * @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
         */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /**
         * @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
         */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
        /**
         * @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersionMatch?: string
        /**
         * @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
         *
         *     When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
         *       is interpreted as "data at least as new as the provided `resourceVersion`"
         *       and the bookmark event is send when the state is synced
         *       to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
         *       If `resourceVersion` is unset, this is interpreted as "consistent read" and the
         *       bookmark event is send when the state is synced at least to the moment
         *       when request started being processed.
         *     - `resourceVersionMatch` set to any other value or unset
         *       Invalid error is returned.
         *
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
         */
        sendInitialEvents?: boolean
        /** @description Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
        timeoutSeconds?: number
        /** @description Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
        watch?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/json;stream=watch": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
          "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"]
        }
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
}

type Resource<T, U> = Omit<T, "status"> & { apiVersion: "apps/v1"; kind: U }

export interface api {
  ControllerRevision: Resource<components["schemas"]["io.k8s.api.apps.v1.ControllerRevision"], "ControllerRevision">
  ControllerRevisionList: Resource<
    components["schemas"]["io.k8s.api.apps.v1.ControllerRevisionList"],
    "ControllerRevisionList"
  >
  DaemonSet: Resource<components["schemas"]["io.k8s.api.apps.v1.DaemonSet"], "DaemonSet">
  DaemonSetList: Resource<components["schemas"]["io.k8s.api.apps.v1.DaemonSetList"], "DaemonSetList">
  Deployment: Resource<components["schemas"]["io.k8s.api.apps.v1.Deployment"], "Deployment">
  DeploymentList: Resource<components["schemas"]["io.k8s.api.apps.v1.DeploymentList"], "DeploymentList">
  ReplicaSet: Resource<components["schemas"]["io.k8s.api.apps.v1.ReplicaSet"], "ReplicaSet">
  ReplicaSetList: Resource<components["schemas"]["io.k8s.api.apps.v1.ReplicaSetList"], "ReplicaSetList">
  StatefulSet: Resource<components["schemas"]["io.k8s.api.apps.v1.StatefulSet"], "StatefulSet">
  StatefulSetList: Resource<components["schemas"]["io.k8s.api.apps.v1.StatefulSetList"], "StatefulSetList">
  DeleteOptions: Resource<components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"], "DeleteOptions">
  WatchEvent: Resource<components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"], "WatchEvent">
}

export default api
