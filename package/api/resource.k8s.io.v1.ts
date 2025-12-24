export interface paths {
  "/apis/resource.k8s.io/v1/": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description get available resources */
    get: operations["getResourceV1APIResources"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/deviceclasses": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind DeviceClass */
    get: operations["listResourceV1DeviceClass"]
    put?: never
    /** @description create a DeviceClass */
    post: operations["createResourceV1DeviceClass"]
    /** @description delete collection of DeviceClass */
    delete: operations["deleteResourceV1CollectionDeviceClass"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/deviceclasses/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the DeviceClass */
        name: string
      }
      cookie?: never
    }
    /** @description read the specified DeviceClass */
    get: operations["readResourceV1DeviceClass"]
    /** @description replace the specified DeviceClass */
    put: operations["replaceResourceV1DeviceClass"]
    post?: never
    /** @description delete a DeviceClass */
    delete: operations["deleteResourceV1DeviceClass"]
    options?: never
    head?: never
    /** @description partially update the specified DeviceClass */
    patch: operations["patchResourceV1DeviceClass"]
    trace?: never
  }
  "/apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims": {
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
    /** @description list or watch objects of kind ResourceClaim */
    get: operations["listResourceV1NamespacedResourceClaim"]
    put?: never
    /** @description create a ResourceClaim */
    post: operations["createResourceV1NamespacedResourceClaim"]
    /** @description delete collection of ResourceClaim */
    delete: operations["deleteResourceV1CollectionNamespacedResourceClaim"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceClaim */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified ResourceClaim */
    get: operations["readResourceV1NamespacedResourceClaim"]
    /** @description replace the specified ResourceClaim */
    put: operations["replaceResourceV1NamespacedResourceClaim"]
    post?: never
    /** @description delete a ResourceClaim */
    delete: operations["deleteResourceV1NamespacedResourceClaim"]
    options?: never
    head?: never
    /** @description partially update the specified ResourceClaim */
    patch: operations["patchResourceV1NamespacedResourceClaim"]
    trace?: never
  }
  "/apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaims/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceClaim */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified ResourceClaim */
    get: operations["readResourceV1NamespacedResourceClaimStatus"]
    /** @description replace status of the specified ResourceClaim */
    put: operations["replaceResourceV1NamespacedResourceClaimStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified ResourceClaim */
    patch: operations["patchResourceV1NamespacedResourceClaimStatus"]
    trace?: never
  }
  "/apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates": {
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
    /** @description list or watch objects of kind ResourceClaimTemplate */
    get: operations["listResourceV1NamespacedResourceClaimTemplate"]
    put?: never
    /** @description create a ResourceClaimTemplate */
    post: operations["createResourceV1NamespacedResourceClaimTemplate"]
    /** @description delete collection of ResourceClaimTemplate */
    delete: operations["deleteResourceV1CollectionNamespacedResourceClaimTemplate"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/namespaces/{namespace}/resourceclaimtemplates/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceClaimTemplate */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified ResourceClaimTemplate */
    get: operations["readResourceV1NamespacedResourceClaimTemplate"]
    /** @description replace the specified ResourceClaimTemplate */
    put: operations["replaceResourceV1NamespacedResourceClaimTemplate"]
    post?: never
    /** @description delete a ResourceClaimTemplate */
    delete: operations["deleteResourceV1NamespacedResourceClaimTemplate"]
    options?: never
    head?: never
    /** @description partially update the specified ResourceClaimTemplate */
    patch: operations["patchResourceV1NamespacedResourceClaimTemplate"]
    trace?: never
  }
  "/apis/resource.k8s.io/v1/resourceclaims": {
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
    /** @description list or watch objects of kind ResourceClaim */
    get: operations["listResourceV1ResourceClaimForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/resourceclaimtemplates": {
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
    /** @description list or watch objects of kind ResourceClaimTemplate */
    get: operations["listResourceV1ResourceClaimTemplateForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/resourceslices": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind ResourceSlice */
    get: operations["listResourceV1ResourceSlice"]
    put?: never
    /** @description create a ResourceSlice */
    post: operations["createResourceV1ResourceSlice"]
    /** @description delete collection of ResourceSlice */
    delete: operations["deleteResourceV1CollectionResourceSlice"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/resourceslices/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceSlice */
        name: string
      }
      cookie?: never
    }
    /** @description read the specified ResourceSlice */
    get: operations["readResourceV1ResourceSlice"]
    /** @description replace the specified ResourceSlice */
    put: operations["replaceResourceV1ResourceSlice"]
    post?: never
    /** @description delete a ResourceSlice */
    delete: operations["deleteResourceV1ResourceSlice"]
    options?: never
    head?: never
    /** @description partially update the specified ResourceSlice */
    patch: operations["patchResourceV1ResourceSlice"]
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/deviceclasses": {
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
    /** @description watch individual changes to a list of DeviceClass. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchResourceV1DeviceClassList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/deviceclasses/{name}": {
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
        /** @description name of the DeviceClass */
        name: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind DeviceClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchResourceV1DeviceClass"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaims": {
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
    /** @description watch individual changes to a list of ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchResourceV1NamespacedResourceClaimList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaims/{name}": {
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
        /** @description name of the ResourceClaim */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchResourceV1NamespacedResourceClaim"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaimtemplates": {
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
    /** @description watch individual changes to a list of ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchResourceV1NamespacedResourceClaimTemplateList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/namespaces/{namespace}/resourceclaimtemplates/{name}": {
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
        /** @description name of the ResourceClaimTemplate */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchResourceV1NamespacedResourceClaimTemplate"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/resourceclaims": {
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
    /** @description watch individual changes to a list of ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchResourceV1ResourceClaimListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/resourceclaimtemplates": {
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
    /** @description watch individual changes to a list of ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchResourceV1ResourceClaimTemplateListForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/resourceslices": {
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
    /** @description watch individual changes to a list of ResourceSlice. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchResourceV1ResourceSliceList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/resource.k8s.io/v1/watch/resourceslices/{name}": {
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
        /** @description name of the ResourceSlice */
        name: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind ResourceSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchResourceV1ResourceSlice"]
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
    /**
     * @description AllocatedDeviceStatus contains the status of an allocated device, if the driver chooses to report it. This may include driver-specific information.
     *
     *     The combination of Driver, Pool, Device, and ShareID must match the corresponding key in Status.Allocation.Devices.
     */
    "io.k8s.api.resource.v1.AllocatedDeviceStatus": {
      /**
       * @description Conditions contains the latest observation of the device's state. If the device has been configured according to the class and claim config references, the `Ready` condition should be True.
       *
       *     Must not contain more than 8 entries.
       */
      conditions?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Condition"][]
      /**
       * @description Data contains arbitrary driver-specific data.
       *
       *     The length of the raw data must be smaller or equal to 10 Ki.
       */
      data?: components["schemas"]["io.k8s.apimachinery.pkg.runtime.RawExtension"]
      /**
       * @description Device references one device instance via its name in the driver's resource pool. It must be a DNS label.
       * @default
       */
      device: string
      /**
       * @description Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.
       *
       *     Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
       * @default
       */
      driver: string
      /** @description NetworkData contains network-related information specific to the device. */
      networkData?: components["schemas"]["io.k8s.api.resource.v1.NetworkDeviceData"]
      /**
       * @description This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).
       *
       *     Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
       * @default
       */
      pool: string
      /** @description ShareID uniquely identifies an individual allocation share of the device. */
      shareID?: string
    }
    /** @description AllocationResult contains attributes of an allocated resource. */
    "io.k8s.api.resource.v1.AllocationResult": {
      /**
       * @description AllocationTimestamp stores the time when the resources were allocated. This field is not guaranteed to be set, in which case that time is unknown.
       *
       *     This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gate.
       */
      allocationTimestamp?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /**
       * @description Devices is the result of allocating devices.
       * @default {}
       */
      devices: components["schemas"]["io.k8s.api.resource.v1.DeviceAllocationResult"]
      /** @description NodeSelector defines where the allocated resources are available. If unset, they are available everywhere. */
      nodeSelector?: components["schemas"]["io.k8s.api.core.v1.NodeSelector"]
    }
    /** @description CELDeviceSelector contains a CEL expression for selecting a device. */
    "io.k8s.api.resource.v1.CELDeviceSelector": {
      /**
       * @description Expression is a CEL expression which evaluates a single device. It must evaluate to true when the device under consideration satisfies the desired criteria, and false when it does not. Any other result is an error and causes allocation of devices to abort.
       *
       *     The expression's input is an object named "device", which carries the following properties:
       *      - driver (string): the name of the driver which defines this device.
       *      - attributes (map[string]object): the device's attributes, grouped by prefix
       *        (e.g. device.attributes["dra.example.com"] evaluates to an object with all
       *        of the attributes which were prefixed by "dra.example.com".
       *      - capacity (map[string]object): the device's capacities, grouped by prefix.
       *      - allowMultipleAllocations (bool): the allowMultipleAllocations property of the device
       *        (v1.34+ with the DRAConsumableCapacity feature enabled).
       *
       *     Example: Consider a device with driver="dra.example.com", which exposes two attributes named "model" and "ext.example.com/family" and which exposes one capacity named "modules". This input to this expression would have the following fields:
       *
       *         device.driver
       *         device.attributes["dra.example.com"].model
       *         device.attributes["ext.example.com"].family
       *         device.capacity["dra.example.com"].modules
       *
       *     The device.driver field can be used to check for a specific driver, either as a high-level precondition (i.e. you only want to consider devices from this driver) or as part of a multi-clause expression that is meant to consider devices from different drivers.
       *
       *     The value type of each attribute is defined by the device definition, and users who write these expressions must consult the documentation for their specific drivers. The value type of each capacity is Quantity.
       *
       *     If an unknown prefix is used as a lookup in either device.attributes or device.capacity, an empty map will be returned. Any reference to an unknown field will cause an evaluation error and allocation to abort.
       *
       *     A robust expression should check for the existence of attributes before referencing them.
       *
       *     For ease of use, the cel.bind() function is enabled, and can be used to simplify expressions that access multiple attributes with the same domain. For example:
       *
       *         cel.bind(dra, device.attributes["dra.example.com"], dra.someBool && dra.anotherBool)
       *
       *     The length of the expression must be smaller or equal to 10 Ki. The cost of evaluating it is also limited based on the estimated number of logical steps.
       * @default
       */
      expression: string
    }
    /**
     * @description CapacityRequestPolicy defines how requests consume device capacity.
     *
     *     Must not set more than one ValidRequestValues.
     */
    "io.k8s.api.resource.v1.CapacityRequestPolicy": {
      /** @description Default specifies how much of this capacity is consumed by a request that does not contain an entry for it in DeviceRequest's Capacity. */
      default?: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      /**
       * @description ValidRange defines an acceptable quantity value range in consuming requests.
       *
       *     If this field is set, Default must be defined and it must fall within the defined ValidRange.
       *
       *     If the requested amount does not fall within the defined range, the request violates the policy, and this device cannot be allocated.
       *
       *     If the request doesn't contain this capacity entry, Default value is used.
       */
      validRange?: components["schemas"]["io.k8s.api.resource.v1.CapacityRequestPolicyRange"]
      /**
       * @description ValidValues defines a set of acceptable quantity values in consuming requests.
       *
       *     Must not contain more than 10 entries. Must be sorted in ascending order.
       *
       *     If this field is set, Default must be defined and it must be included in ValidValues list.
       *
       *     If the requested amount does not match any valid value but smaller than some valid values, the scheduler calculates the smallest valid value that is greater than or equal to the request. That is: min(ceil(requestedValue) ∈ validValues), where requestedValue ≤ max(validValues).
       *
       *     If the requested amount exceeds all valid values, the request violates the policy, and this device cannot be allocated.
       */
      validValues?: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"][]
    }
    /**
     * @description CapacityRequestPolicyRange defines a valid range for consumable capacity values.
     *
     *       - If the requested amount is less than Min, it is rounded up to the Min value.
     *       - If Step is set and the requested amount is between Min and Max but not aligned with Step,
     *         it will be rounded up to the next value equal to Min + (n * Step).
     *       - If Step is not set, the requested amount is used as-is if it falls within the range Min to Max (if set).
     *       - If the requested or rounded amount exceeds Max (if set), the request does not satisfy the policy,
     *         and the device cannot be allocated.
     */
    "io.k8s.api.resource.v1.CapacityRequestPolicyRange": {
      /**
       * @description Max defines the upper limit for capacity that can be requested.
       *
       *     Max must be less than or equal to the capacity value. Min and requestPolicy.default must be less than or equal to the maximum.
       */
      max?: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      /**
       * @description Min specifies the minimum capacity allowed for a consumption request.
       *
       *     Min must be greater than or equal to zero, and less than or equal to the capacity value. requestPolicy.default must be more than or equal to the minimum.
       */
      min: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      /**
       * @description Step defines the step size between valid capacity amounts within the range.
       *
       *     Max (if set) and requestPolicy.default must be a multiple of Step. Min + Step must be less than or equal to the capacity value.
       */
      step?: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
    }
    /** @description CapacityRequirements defines the capacity requirements for a specific device request. */
    "io.k8s.api.resource.v1.CapacityRequirements": {
      /**
       * @description Requests represent individual device resource requests for distinct resources, all of which must be provided by the device.
       *
       *     This value is used as an additional filtering condition against the available capacity on the device. This is semantically equivalent to a CEL selector with `device.capacity[<domain>].<name>.compareTo(quantity(<request quantity>)) >= 0`. For example, device.capacity['test-driver.cdi.k8s.io'].counters.compareTo(quantity('2')) >= 0.
       *
       *     When a requestPolicy is defined, the requested amount is adjusted upward to the nearest valid value based on the policy. If the requested amount cannot be adjusted to a valid value—because it exceeds what the requestPolicy allows— the device is considered ineligible for allocation.
       *
       *     For any capacity that is not explicitly requested: - If no requestPolicy is set, the default consumed capacity is equal to the full device capacity
       *       (i.e., the whole device is claimed).
       *     - If a requestPolicy is set, the default consumed capacity is determined according to that policy.
       *
       *     If the device allows multiple allocation, the aggregated amount across all requests must not exceed the capacity value. The consumed capacity, which may be adjusted based on the requestPolicy if defined, is recorded in the resource claim’s status.devices[*].consumedCapacity field.
       */
      requests?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
    }
    /** @description Counter describes a quantity associated with a device. */
    "io.k8s.api.resource.v1.Counter": {
      /** @description Value defines how much of a certain device counter is available. */
      value: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
    }
    /**
     * @description CounterSet defines a named set of counters that are available to be used by devices defined in the ResourceSlice.
     *
     *     The counters are not allocatable by themselves, but can be referenced by devices. When a device is allocated, the portion of counters it uses will no longer be available for use by other devices.
     */
    "io.k8s.api.resource.v1.CounterSet": {
      /**
       * @description Counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.
       *
       *     The maximum number of counters in all sets is 32.
       */
      counters: {
        [key: string]: components["schemas"]["io.k8s.api.resource.v1.Counter"]
      }
      /**
       * @description Name defines the name of the counter set. It must be a DNS label.
       * @default
       */
      name: string
    }
    /** @description Device represents one individual hardware instance that can be selected based on its attributes. Besides the name, exactly one field must be set. */
    "io.k8s.api.resource.v1.Device": {
      /**
       * @description AllNodes indicates that all nodes have access to the device.
       *
       *     Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
       */
      allNodes?: boolean
      /**
       * @description AllowMultipleAllocations marks whether the device is allowed to be allocated to multiple DeviceRequests.
       *
       *     If AllowMultipleAllocations is set to true, the device can be allocated more than once, and all of its capacity is consumable, regardless of whether the requestPolicy is defined or not.
       */
      allowMultipleAllocations?: boolean
      /**
       * @description Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.
       *
       *     The maximum number of attributes and capacities combined is 32.
       */
      attributes?: {
        [key: string]: components["schemas"]["io.k8s.api.resource.v1.DeviceAttribute"]
      }
      /**
       * @description BindingConditions defines the conditions for proceeding with binding. All of these conditions must be set in the per-device status conditions with a value of True to proceed with binding the pod to the node while scheduling the pod.
       *
       *     The maximum number of binding conditions is 4.
       *
       *     The conditions must be a valid condition type string.
       *
       *     This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindingConditions?: string[]
      /**
       * @description BindingFailureConditions defines the conditions for binding failure. They may be set in the per-device status conditions. If any is set to "True", a binding failure occurred.
       *
       *     The maximum number of binding failure conditions is 4.
       *
       *     The conditions must be a valid condition type string.
       *
       *     This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindingFailureConditions?: string[]
      /**
       * @description BindsToNode indicates if the usage of an allocation involving this device has to be limited to exactly the node that was chosen when allocating the claim. If set to true, the scheduler will set the ResourceClaim.Status.Allocation.NodeSelector to match the node where the allocation was made.
       *
       *     This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindsToNode?: boolean
      /**
       * @description Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.
       *
       *     The maximum number of attributes and capacities combined is 32.
       */
      capacity?: {
        [key: string]: components["schemas"]["io.k8s.api.resource.v1.DeviceCapacity"]
      }
      /**
       * @description ConsumesCounters defines a list of references to sharedCounters and the set of counters that the device will consume from those counter sets.
       *
       *     There can only be a single entry per counterSet.
       *
       *     The total number of device counter consumption entries must be <= 32. In addition, the total number in the entire ResourceSlice must be <= 1024 (for example, 64 devices with 16 counters each).
       */
      consumesCounters?: components["schemas"]["io.k8s.api.resource.v1.DeviceCounterConsumption"][]
      /**
       * @description Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.
       * @default
       */
      name: string
      /**
       * @description NodeName identifies the node where the device is available.
       *
       *     Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
       */
      nodeName?: string
      /**
       * @description NodeSelector defines the nodes where the device is available.
       *
       *     Must use exactly one term.
       *
       *     Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
       */
      nodeSelector?: components["schemas"]["io.k8s.api.core.v1.NodeSelector"]
      /**
       * @description If specified, these are the driver-defined taints.
       *
       *     The maximum number of taints is 4.
       *
       *     This is an alpha field and requires enabling the DRADeviceTaints feature gate.
       */
      taints?: components["schemas"]["io.k8s.api.resource.v1.DeviceTaint"][]
    }
    /** @description DeviceAllocationConfiguration gets embedded in an AllocationResult. */
    "io.k8s.api.resource.v1.DeviceAllocationConfiguration": {
      /** @description Opaque provides driver-specific configuration parameters. */
      opaque?: components["schemas"]["io.k8s.api.resource.v1.OpaqueDeviceConfiguration"]
      /**
       * @description Requests lists the names of requests where the configuration applies. If empty, its applies to all requests.
       *
       *     References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.
       */
      requests?: string[]
      /**
       * @description Source records whether the configuration comes from a class and thus is not something that a normal user would have been able to set or from a claim.
       * @default
       */
      source: string
    }
    /** @description DeviceAllocationResult is the result of allocating devices. */
    "io.k8s.api.resource.v1.DeviceAllocationResult": {
      /**
       * @description This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.
       *
       *     This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
       */
      config?: components["schemas"]["io.k8s.api.resource.v1.DeviceAllocationConfiguration"][]
      /** @description Results lists all allocated devices. */
      results?: components["schemas"]["io.k8s.api.resource.v1.DeviceRequestAllocationResult"][]
    }
    /** @description DeviceAttribute must have exactly one field set. */
    "io.k8s.api.resource.v1.DeviceAttribute": {
      /** @description BoolValue is a true/false value. */
      bool?: boolean
      /**
       * Format: int64
       * @description IntValue is a number.
       */
      int?: number
      /** @description StringValue is a string. Must not be longer than 64 characters. */
      string?: string
      /** @description VersionValue is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters. */
      version?: string
    }
    /** @description DeviceCapacity describes a quantity associated with a device. */
    "io.k8s.api.resource.v1.DeviceCapacity": {
      /**
       * @description RequestPolicy defines how this DeviceCapacity must be consumed when the device is allowed to be shared by multiple allocations.
       *
       *     The Device must have allowMultipleAllocations set to true in order to set a requestPolicy.
       *
       *     If unset, capacity requests are unconstrained: requests can consume any amount of capacity, as long as the total consumed across all allocations does not exceed the device's defined capacity. If request is also unset, default is the full capacity value.
       */
      requestPolicy?: components["schemas"]["io.k8s.api.resource.v1.CapacityRequestPolicy"]
      /**
       * @description Value defines how much of a certain capacity that device has.
       *
       *     This field reflects the fixed total capacity and does not change. The consumed amount is tracked separately by scheduler and does not affect this value.
       */
      value: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
    }
    /** @description DeviceClaim defines how to request devices with a ResourceClaim. */
    "io.k8s.api.resource.v1.DeviceClaim": {
      /** @description This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim. */
      config?: components["schemas"]["io.k8s.api.resource.v1.DeviceClaimConfiguration"][]
      /** @description These constraints must be satisfied by the set of devices that get allocated for the claim. */
      constraints?: components["schemas"]["io.k8s.api.resource.v1.DeviceConstraint"][]
      /** @description Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated. */
      requests?: components["schemas"]["io.k8s.api.resource.v1.DeviceRequest"][]
    }
    /** @description DeviceClaimConfiguration is used for configuration parameters in DeviceClaim. */
    "io.k8s.api.resource.v1.DeviceClaimConfiguration": {
      /** @description Opaque provides driver-specific configuration parameters. */
      opaque?: components["schemas"]["io.k8s.api.resource.v1.OpaqueDeviceConfiguration"]
      /**
       * @description Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
       *
       *     References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.
       */
      requests?: string[]
    }
    /**
     * @description DeviceClass is a vendor- or admin-provided resource that contains device configuration and selectors. It can be referenced in the device requests of a claim to apply these presets. Cluster scoped.
     *
     *     This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
     */
    "io.k8s.api.resource.v1.DeviceClass": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Spec defines what can be allocated and how to configure it.
       *
       *     This is mutable. Consumers have to be prepared for classes changing at any time, either because they get updated or replaced. Claim allocations are done once based on whatever was set in classes at the time of allocation.
       *
       *     Changing the spec automatically increments the metadata.generation number.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.resource.v1.DeviceClassSpec"]
    }
    /** @description DeviceClassConfiguration is used in DeviceClass. */
    "io.k8s.api.resource.v1.DeviceClassConfiguration": {
      /** @description Opaque provides driver-specific configuration parameters. */
      opaque?: components["schemas"]["io.k8s.api.resource.v1.OpaqueDeviceConfiguration"]
    }
    /** @description DeviceClassList is a collection of classes. */
    "io.k8s.api.resource.v1.DeviceClassList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of resource classes. */
      items: components["schemas"]["io.k8s.api.resource.v1.DeviceClass"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it. */
    "io.k8s.api.resource.v1.DeviceClassSpec": {
      /**
       * @description Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.
       *
       *     They are passed to the driver, but are not considered while allocating the claim.
       */
      config?: components["schemas"]["io.k8s.api.resource.v1.DeviceClassConfiguration"][]
      /**
       * @description ExtendedResourceName is the extended resource name for the devices of this class. The devices of this class can be used to satisfy a pod's extended resource requests. It has the same format as the name of a pod's extended resource. It should be unique among all the device classes in a cluster. If two device classes have the same name, then the class created later is picked to satisfy a pod's extended resource requests. If two classes are created at the same time, then the name of the class lexicographically sorted first is picked.
       *
       *     This is an alpha field.
       */
      extendedResourceName?: string
      /** @description Each selector must be satisfied by a device which is claimed via this class. */
      selectors?: components["schemas"]["io.k8s.api.resource.v1.DeviceSelector"][]
    }
    /** @description DeviceConstraint must have exactly one field set besides Requests. */
    "io.k8s.api.resource.v1.DeviceConstraint": {
      /**
       * @description DistinctAttribute requires that all devices in question have this attribute and that its type and value are unique across those devices.
       *
       *     This acts as the inverse of MatchAttribute.
       *
       *     This constraint is used to avoid allocating multiple requests to the same device by ensuring attribute-level differentiation.
       *
       *     This is useful for scenarios where resource requests must be fulfilled by separate physical devices. For example, a container requests two network interfaces that must be allocated from two different physical NICs.
       */
      distinctAttribute?: string
      /**
       * @description MatchAttribute requires that all devices in question have this attribute and that its type and value are the same across those devices.
       *
       *     For example, if you specified "dra.example.com/numa" (a hypothetical example!), then only devices in the same NUMA node will be chosen. A device which does not have that attribute will not be chosen. All devices should use a value of the same type for this attribute because that is part of its specification, but if one device doesn't, then it also will not be chosen.
       *
       *     Must include the domain qualifier.
       */
      matchAttribute?: string
      /**
       * @description Requests is a list of the one or more requests in this claim which must co-satisfy this constraint. If a request is fulfilled by multiple devices, then all of the devices must satisfy the constraint. If this is not specified, this constraint applies to all requests in this claim.
       *
       *     References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the constraint applies to all subrequests.
       */
      requests?: string[]
    }
    /** @description DeviceCounterConsumption defines a set of counters that a device will consume from a CounterSet. */
    "io.k8s.api.resource.v1.DeviceCounterConsumption": {
      /**
       * @description CounterSet is the name of the set from which the counters defined will be consumed.
       * @default
       */
      counterSet: string
      /**
       * @description Counters defines the counters that will be consumed by the device.
       *
       *     The maximum number counters in a device is 32. In addition, the maximum number of all counters in all devices is 1024 (for example, 64 devices with 16 counters each).
       */
      counters: {
        [key: string]: components["schemas"]["io.k8s.api.resource.v1.Counter"]
      }
    }
    /** @description DeviceRequest is a request for devices required for a claim. This is typically a request for a single resource like a device, but can also ask for several identical devices. With FirstAvailable it is also possible to provide a prioritized list of requests. */
    "io.k8s.api.resource.v1.DeviceRequest": {
      /**
       * @description Exactly specifies the details for a single request that must be met exactly for the request to be satisfied.
       *
       *     One of Exactly or FirstAvailable must be set.
       */
      exactly?: components["schemas"]["io.k8s.api.resource.v1.ExactDeviceRequest"]
      /**
       * @description FirstAvailable contains subrequests, of which exactly one will be selected by the scheduler. It tries to satisfy them in the order in which they are listed here. So if there are two entries in the list, the scheduler will only check the second one if it determines that the first one can not be used.
       *
       *     DRA does not yet implement scoring, so the scheduler will select the first set of devices that satisfies all the requests in the claim. And if the requirements can be satisfied on more than one node, other scheduling features will determine which node is chosen. This means that the set of devices allocated to a claim might not be the optimal set available to the cluster. Scoring will be implemented later.
       */
      firstAvailable?: components["schemas"]["io.k8s.api.resource.v1.DeviceSubRequest"][]
      /**
       * @description Name can be used to reference this request in a pod.spec.containers[].resources.claims entry and in a constraint of the claim.
       *
       *     References using the name in the DeviceRequest will uniquely identify a request when the Exactly field is set. When the FirstAvailable field is set, a reference to the name of the DeviceRequest will match whatever subrequest is chosen by the scheduler.
       *
       *     Must be a DNS label.
       * @default
       */
      name: string
    }
    /** @description DeviceRequestAllocationResult contains the allocation result for one request. */
    "io.k8s.api.resource.v1.DeviceRequestAllocationResult": {
      /**
       * @description AdminAccess indicates that this device was allocated for administrative access. See the corresponding request field for a definition of mode.
       *
       *     This is an alpha field and requires enabling the DRAAdminAccess feature gate. Admin access is disabled if this field is unset or set to false, otherwise it is enabled.
       */
      adminAccess?: boolean
      /**
       * @description BindingConditions contains a copy of the BindingConditions from the corresponding ResourceSlice at the time of allocation.
       *
       *     This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindingConditions?: string[]
      /**
       * @description BindingFailureConditions contains a copy of the BindingFailureConditions from the corresponding ResourceSlice at the time of allocation.
       *
       *     This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindingFailureConditions?: string[]
      /**
       * @description ConsumedCapacity tracks the amount of capacity consumed per device as part of the claim request. The consumed amount may differ from the requested amount: it is rounded up to the nearest valid value based on the device’s requestPolicy if applicable (i.e., may not be less than the requested amount).
       *
       *     The total consumed capacity for each device must not exceed the DeviceCapacity's Value.
       *
       *     This field is populated only for devices that allow multiple allocations. All capacity entries are included, even if the consumed amount is zero.
       */
      consumedCapacity?: {
        [key: string]: components["schemas"]["io.k8s.apimachinery.pkg.api.resource.Quantity"]
      }
      /**
       * @description Device references one device instance via its name in the driver's resource pool. It must be a DNS label.
       * @default
       */
      device: string
      /**
       * @description Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.
       *
       *     Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
       * @default
       */
      driver: string
      /**
       * @description This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).
       *
       *     Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
       * @default
       */
      pool: string
      /**
       * @description Request is the name of the request in the claim which caused this device to be allocated. If it references a subrequest in the firstAvailable list on a DeviceRequest, this field must include both the name of the main request and the subrequest using the format <main request>/<subrequest>.
       *
       *     Multiple devices may have been allocated per request.
       * @default
       */
      request: string
      /** @description ShareID uniquely identifies an individual allocation share of the device, used when the device supports multiple simultaneous allocations. It serves as an additional map key to differentiate concurrent shares of the same device. */
      shareID?: string
      /**
       * @description A copy of all tolerations specified in the request at the time when the device got allocated.
       *
       *     The maximum number of tolerations is 16.
       *
       *     This is an alpha field and requires enabling the DRADeviceTaints feature gate.
       */
      tolerations?: components["schemas"]["io.k8s.api.resource.v1.DeviceToleration"][]
    }
    /** @description DeviceSelector must have exactly one field set. */
    "io.k8s.api.resource.v1.DeviceSelector": {
      /** @description CEL contains a CEL expression for selecting a device. */
      cel?: components["schemas"]["io.k8s.api.resource.v1.CELDeviceSelector"]
    }
    /**
     * @description DeviceSubRequest describes a request for device provided in the claim.spec.devices.requests[].firstAvailable array. Each is typically a request for a single resource like a device, but can also ask for several identical devices.
     *
     *     DeviceSubRequest is similar to ExactDeviceRequest, but doesn't expose the AdminAccess field as that one is only supported when requesting a specific device.
     */
    "io.k8s.api.resource.v1.DeviceSubRequest": {
      /**
       * @description AllocationMode and its related fields define how devices are allocated to satisfy this subrequest. Supported values are:
       *
       *     - ExactCount: This request is for a specific number of devices.
       *       This is the default. The exact number is provided in the
       *       count field.
       *
       *     - All: This subrequest is for all of the matching devices in a pool.
       *       Allocation will fail if some devices are already allocated,
       *       unless adminAccess is requested.
       *
       *     If AllocationMode is not specified, the default mode is ExactCount. If the mode is ExactCount and count is not specified, the default count is one. Any other subrequests must specify this field.
       *
       *     More modes may get added in the future. Clients must refuse to handle requests with unknown modes.
       */
      allocationMode?: string
      /**
       * @description Capacity define resource requirements against each capacity.
       *
       *     If this field is unset and the device supports multiple allocations, the default value will be applied to each capacity according to requestPolicy. For the capacity that has no requestPolicy, default is the full capacity value.
       *
       *     Applies to each device allocation. If Count > 1, the request fails if there aren't enough devices that meet the requirements. If AllocationMode is set to All, the request fails if there are devices that otherwise match the request, and have this capacity, with a value >= the requested amount, but which cannot be allocated to this request.
       */
      capacity?: components["schemas"]["io.k8s.api.resource.v1.CapacityRequirements"]
      /**
       * Format: int64
       * @description Count is used only when the count mode is "ExactCount". Must be greater than zero. If AllocationMode is ExactCount and this field is not specified, the default is one.
       */
      count?: number
      /**
       * @description DeviceClassName references a specific DeviceClass, which can define additional configuration and selectors to be inherited by this subrequest.
       *
       *     A class is required. Which classes are available depends on the cluster.
       *
       *     Administrators may use this to restrict which devices may get requested by only installing classes with selectors for permitted devices. If users are free to request anything without restrictions, then administrators can create an empty DeviceClass for users to reference.
       * @default
       */
      deviceClassName: string
      /**
       * @description Name can be used to reference this subrequest in the list of constraints or the list of configurations for the claim. References must use the format <main request>/<subrequest>.
       *
       *     Must be a DNS label.
       * @default
       */
      name: string
      /** @description Selectors define criteria which must be satisfied by a specific device in order for that device to be considered for this subrequest. All selectors must be satisfied for a device to be considered. */
      selectors?: components["schemas"]["io.k8s.api.resource.v1.DeviceSelector"][]
      /**
       * @description If specified, the request's tolerations.
       *
       *     Tolerations for NoSchedule are required to allocate a device which has a taint with that effect. The same applies to NoExecute.
       *
       *     In addition, should any of the allocated devices get tainted with NoExecute after allocation and that effect is not tolerated, then all pods consuming the ResourceClaim get deleted to evict them. The scheduler will not let new pods reserve the claim while it has these tainted devices. Once all pods are evicted, the claim will get deallocated.
       *
       *     The maximum number of tolerations is 16.
       *
       *     This is an alpha field and requires enabling the DRADeviceTaints feature gate.
       */
      tolerations?: components["schemas"]["io.k8s.api.resource.v1.DeviceToleration"][]
    }
    /** @description The device this taint is attached to has the "effect" on any claim which does not tolerate the taint and, through the claim, to pods using the claim. */
    "io.k8s.api.resource.v1.DeviceTaint": {
      /**
       * @description The effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them. Valid effects are NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here.
       *
       *     Possible enum values:
       *      - `"NoExecute"` Evict any already-running pods that do not tolerate the device taint.
       *      - `"NoSchedule"` Do not allow new pods to schedule which use a tainted device unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running.
       * @default
       * @enum {string}
       */
      effect: "NoExecute" | "NoSchedule"
      /**
       * @description The taint key to be applied to a device. Must be a label name.
       * @default
       */
      key: string
      /** @description TimeAdded represents the time at which the taint was added. Added automatically during create or update if not set. */
      timeAdded?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description The taint value corresponding to the taint key. Must be a label value. */
      value?: string
    }
    /** @description The ResourceClaim this DeviceToleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
    "io.k8s.api.resource.v1.DeviceToleration": {
      /**
       * @description Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule and NoExecute.
       *
       *     Possible enum values:
       *      - `"NoExecute"` Evict any already-running pods that do not tolerate the device taint.
       *      - `"NoSchedule"` Do not allow new pods to schedule which use a tainted device unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running.
       * @enum {string}
       */
      effect?: "NoExecute" | "NoSchedule"
      /** @description Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. Must be a label name. */
      key?: string
      /**
       * @description Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a ResourceClaim can tolerate all taints of a particular category.
       *
       *     Possible enum values:
       *      - `"Equal"`
       *      - `"Exists"`
       * @default Equal
       * @enum {string}
       */
      operator: "Equal" | "Exists"
      /**
       * Format: int64
       * @description TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. If larger than zero, the time when the pod needs to be evicted is calculated as <time when taint was adedd> + <toleration seconds>.
       */
      tolerationSeconds?: number
      /** @description Value is the taint value the toleration matches to. If the operator is Exists, the value must be empty, otherwise just a regular string. Must be a label value. */
      value?: string
    }
    /** @description ExactDeviceRequest is a request for one or more identical devices. */
    "io.k8s.api.resource.v1.ExactDeviceRequest": {
      /**
       * @description AdminAccess indicates that this is a claim for administrative access to the device(s). Claims with AdminAccess are expected to be used for monitoring or other management services for a device.  They ignore all ordinary claims to the device with respect to access modes and any resource allocations.
       *
       *     This is an alpha field and requires enabling the DRAAdminAccess feature gate. Admin access is disabled if this field is unset or set to false, otherwise it is enabled.
       */
      adminAccess?: boolean
      /**
       * @description AllocationMode and its related fields define how devices are allocated to satisfy this request. Supported values are:
       *
       *     - ExactCount: This request is for a specific number of devices.
       *       This is the default. The exact number is provided in the
       *       count field.
       *
       *     - All: This request is for all of the matching devices in a pool.
       *       At least one device must exist on the node for the allocation to succeed.
       *       Allocation will fail if some devices are already allocated,
       *       unless adminAccess is requested.
       *
       *     If AllocationMode is not specified, the default mode is ExactCount. If the mode is ExactCount and count is not specified, the default count is one. Any other requests must specify this field.
       *
       *     More modes may get added in the future. Clients must refuse to handle requests with unknown modes.
       */
      allocationMode?: string
      /**
       * @description Capacity define resource requirements against each capacity.
       *
       *     If this field is unset and the device supports multiple allocations, the default value will be applied to each capacity according to requestPolicy. For the capacity that has no requestPolicy, default is the full capacity value.
       *
       *     Applies to each device allocation. If Count > 1, the request fails if there aren't enough devices that meet the requirements. If AllocationMode is set to All, the request fails if there are devices that otherwise match the request, and have this capacity, with a value >= the requested amount, but which cannot be allocated to this request.
       */
      capacity?: components["schemas"]["io.k8s.api.resource.v1.CapacityRequirements"]
      /**
       * Format: int64
       * @description Count is used only when the count mode is "ExactCount". Must be greater than zero. If AllocationMode is ExactCount and this field is not specified, the default is one.
       */
      count?: number
      /**
       * @description DeviceClassName references a specific DeviceClass, which can define additional configuration and selectors to be inherited by this request.
       *
       *     A DeviceClassName is required.
       *
       *     Administrators may use this to restrict which devices may get requested by only installing classes with selectors for permitted devices. If users are free to request anything without restrictions, then administrators can create an empty DeviceClass for users to reference.
       * @default
       */
      deviceClassName: string
      /** @description Selectors define criteria which must be satisfied by a specific device in order for that device to be considered for this request. All selectors must be satisfied for a device to be considered. */
      selectors?: components["schemas"]["io.k8s.api.resource.v1.DeviceSelector"][]
      /**
       * @description If specified, the request's tolerations.
       *
       *     Tolerations for NoSchedule are required to allocate a device which has a taint with that effect. The same applies to NoExecute.
       *
       *     In addition, should any of the allocated devices get tainted with NoExecute after allocation and that effect is not tolerated, then all pods consuming the ResourceClaim get deleted to evict them. The scheduler will not let new pods reserve the claim while it has these tainted devices. Once all pods are evicted, the claim will get deallocated.
       *
       *     The maximum number of tolerations is 16.
       *
       *     This is an alpha field and requires enabling the DRADeviceTaints feature gate.
       */
      tolerations?: components["schemas"]["io.k8s.api.resource.v1.DeviceToleration"][]
    }
    /** @description NetworkDeviceData provides network-related details for the allocated device. This information may be filled by drivers or other components to configure or identify the device within a network context. */
    "io.k8s.api.resource.v1.NetworkDeviceData": {
      /**
       * @description HardwareAddress represents the hardware address (e.g. MAC Address) of the device's network interface.
       *
       *     Must not be longer than 128 characters.
       */
      hardwareAddress?: string
      /**
       * @description InterfaceName specifies the name of the network interface associated with the allocated device. This might be the name of a physical or virtual network interface being configured in the pod.
       *
       *     Must not be longer than 256 characters.
       */
      interfaceName?: string
      /** @description IPs lists the network addresses assigned to the device's network interface. This can include both IPv4 and IPv6 addresses. The IPs are in the CIDR notation, which includes both the address and the associated subnet mask. e.g.: "192.0.2.5/24" for IPv4 and "2001:db8::5/64" for IPv6. */
      ips?: string[]
    }
    /** @description OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor. */
    "io.k8s.api.resource.v1.OpaqueDeviceConfiguration": {
      /**
       * @description Driver is used to determine which kubelet plugin needs to be passed these configuration parameters.
       *
       *     An admission policy provided by the driver developer could use this to decide whether it needs to validate them.
       *
       *     Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
       * @default
       */
      driver: string
      /**
       * @description Parameters can contain arbitrary data. It is the responsibility of the driver developer to handle validation and versioning. Typically this includes self-identification and a version ("kind" + "apiVersion" for Kubernetes types), with conversion between different versions.
       *
       *     The length of the raw data must be smaller or equal to 10 Ki.
       */
      parameters: components["schemas"]["io.k8s.apimachinery.pkg.runtime.RawExtension"]
    }
    /**
     * @description ResourceClaim describes a request for access to resources in the cluster, for use by workloads. For example, if a workload needs an accelerator device with specific properties, this is how that request is expressed. The status stanza tracks whether this claim has been satisfied and what specific resources have been allocated.
     *
     *     This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
     */
    "io.k8s.api.resource.v1.ResourceClaim": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Spec describes what is being requested and how to configure it. The spec is immutable.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.resource.v1.ResourceClaimSpec"]
      /**
       * @description Status describes whether the claim is ready to use and what has been allocated.
       * @default {}
       */
      status: components["schemas"]["io.k8s.api.resource.v1.ResourceClaimStatus"]
    }
    /** @description ResourceClaimConsumerReference contains enough information to let you locate the consumer of a ResourceClaim. The user must be a resource in the same namespace as the ResourceClaim. */
    "io.k8s.api.resource.v1.ResourceClaimConsumerReference": {
      /** @description APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources. */
      apiGroup?: string
      /**
       * @description Name is the name of resource being referenced.
       * @default
       */
      name: string
      /**
       * @description Resource is the type of resource being referenced, for example "pods".
       * @default
       */
      resource: string
      /**
       * @description UID identifies exactly one incarnation of the resource.
       * @default
       */
      uid: string
    }
    /** @description ResourceClaimList is a collection of claims. */
    "io.k8s.api.resource.v1.ResourceClaimList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of resource claims. */
      items: components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it. */
    "io.k8s.api.resource.v1.ResourceClaimSpec": {
      /**
       * @description Devices defines how to request devices.
       * @default {}
       */
      devices: components["schemas"]["io.k8s.api.resource.v1.DeviceClaim"]
    }
    /** @description ResourceClaimStatus tracks whether the resource has been allocated and what the result of that was. */
    "io.k8s.api.resource.v1.ResourceClaimStatus": {
      /** @description Allocation is set once the claim has been allocated successfully. */
      allocation?: components["schemas"]["io.k8s.api.resource.v1.AllocationResult"]
      /** @description Devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers. */
      devices?: components["schemas"]["io.k8s.api.resource.v1.AllocatedDeviceStatus"][]
      /**
       * @description ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.
       *
       *     In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.
       *
       *     Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.
       *
       *     There can be at most 256 such reservations. This may get increased in the future, but not reduced.
       */
      reservedFor?: components["schemas"]["io.k8s.api.resource.v1.ResourceClaimConsumerReference"][]
    }
    /**
     * @description ResourceClaimTemplate is used to produce ResourceClaim objects.
     *
     *     This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
     */
    "io.k8s.api.resource.v1.ResourceClaimTemplate": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Describes the ResourceClaim that is to be generated.
       *
       *     This field is immutable. A ResourceClaim will get created by the control plane for a Pod when needed and then not get updated anymore.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateSpec"]
    }
    /** @description ResourceClaimTemplateList is a collection of claim templates. */
    "io.k8s.api.resource.v1.ResourceClaimTemplateList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of resource claim templates. */
      items: components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim. */
    "io.k8s.api.resource.v1.ResourceClaimTemplateSpec": {
      /**
       * @description ObjectMeta may contain labels and annotations that will be copied into the ResourceClaim when creating it. No other fields are allowed and will be rejected during validation.
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Spec for the ResourceClaim. The entire content is copied unchanged into the ResourceClaim that gets created from this template. The same fields as in a ResourceClaim are also valid here.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.resource.v1.ResourceClaimSpec"]
    }
    /** @description ResourcePool describes the pool that ResourceSlices belong to. */
    "io.k8s.api.resource.v1.ResourcePool": {
      /**
       * Format: int64
       * @description Generation tracks the change in a pool over time. Whenever a driver changes something about one or more of the resources in a pool, it must change the generation in all ResourceSlices which are part of that pool. Consumers of ResourceSlices should only consider resources from the pool with the highest generation number. The generation may be reset by drivers, which should be fine for consumers, assuming that all ResourceSlices in a pool are updated to match or deleted.
       *
       *     Combined with ResourceSliceCount, this mechanism enables consumers to detect pools which are comprised of multiple ResourceSlices and are in an incomplete state.
       * @default 0
       */
      generation: number
      /**
       * @description Name is used to identify the pool. For node-local devices, this is often the node name, but this is not required.
       *
       *     It must not be longer than 253 characters and must consist of one or more DNS sub-domains separated by slashes. This field is immutable.
       * @default
       */
      name: string
      /**
       * Format: int64
       * @description ResourceSliceCount is the total number of ResourceSlices in the pool at this generation number. Must be greater than zero.
       *
       *     Consumers can use this to check whether they have seen all ResourceSlices belonging to the same pool.
       * @default 0
       */
      resourceSliceCount: number
    }
    /**
     * @description ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.
     *
     *     At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.
     *
     *     Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.
     *
     *     When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.
     *
     *     For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.
     *
     *     This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
     */
    "io.k8s.api.resource.v1.ResourceSlice": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description Contains the information published by the driver.
       *
       *     Changing the spec automatically increments the metadata.generation number.
       * @default {}
       */
      spec: components["schemas"]["io.k8s.api.resource.v1.ResourceSliceSpec"]
    }
    /** @description ResourceSliceList is a collection of ResourceSlices. */
    "io.k8s.api.resource.v1.ResourceSliceList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Items is the list of resource ResourceSlices. */
      items: components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard list metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description ResourceSliceSpec contains the information published by the driver in one ResourceSlice. */
    "io.k8s.api.resource.v1.ResourceSliceSpec": {
      /**
       * @description AllNodes indicates that all nodes have access to the resources in the pool.
       *
       *     Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
       */
      allNodes?: boolean
      /**
       * @description Devices lists some or all of the devices in this pool.
       *
       *     Must not have more than 128 entries.
       */
      devices?: components["schemas"]["io.k8s.api.resource.v1.Device"][]
      /**
       * @description Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.
       *
       *     Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. This field is immutable.
       * @default
       */
      driver: string
      /**
       * @description NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.
       *
       *     This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.
       *
       *     Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set. This field is immutable.
       */
      nodeName?: string
      /**
       * @description NodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.
       *
       *     Must use exactly one term.
       *
       *     Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
       */
      nodeSelector?: components["schemas"]["io.k8s.api.core.v1.NodeSelector"]
      /**
       * @description PerDeviceNodeSelection defines whether the access from nodes to resources in the pool is set on the ResourceSlice level or on each device. If it is set to true, every device defined the ResourceSlice must specify this individually.
       *
       *     Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
       */
      perDeviceNodeSelection?: boolean
      /**
       * @description Pool describes the pool that this ResourceSlice belongs to.
       * @default {}
       */
      pool: components["schemas"]["io.k8s.api.resource.v1.ResourcePool"]
      /**
       * @description SharedCounters defines a list of counter sets, each of which has a name and a list of counters available.
       *
       *     The names of the SharedCounters must be unique in the ResourceSlice.
       *
       *     The maximum number of counters in all sets is 32.
       */
      sharedCounters?: components["schemas"]["io.k8s.api.resource.v1.CounterSet"][]
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
    /** @description Condition contains details for one aspect of the current state of this API Resource. */
    "io.k8s.apimachinery.pkg.apis.meta.v1.Condition": {
      /** @description lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable. */
      lastTransitionTime: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /**
       * @description message is a human readable message indicating details about the transition. This may be an empty string.
       * @default
       */
      message: string
      /**
       * Format: int64
       * @description observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      observedGeneration?: number
      /**
       * @description reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       * @default
       */
      reason: string
      /**
       * @description status of the condition, one of True, False, Unknown.
       * @default
       */
      status: string
      /**
       * @description type of condition in CamelCase or in foo.example.com/CamelCase.
       * @default
       */
      type: string
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
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getResourceV1APIResources: {
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
  listResourceV1DeviceClass: {
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClassList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.resource.v1.DeviceClassList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClassList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.resource.v1.DeviceClassList"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClassList"]
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
  createResourceV1DeviceClass: {
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
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
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
  deleteResourceV1CollectionDeviceClass: {
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
      path?: never
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
  readResourceV1DeviceClass: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the DeviceClass */
        name: string
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
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
  replaceResourceV1DeviceClass: {
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
        /** @description name of the DeviceClass */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
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
  deleteResourceV1DeviceClass: {
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
        /** @description name of the DeviceClass */
        name: string
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
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
  patchResourceV1DeviceClass: {
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
        /** @description name of the DeviceClass */
        name: string
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.DeviceClass"]
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
  listResourceV1NamespacedResourceClaim: {
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
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
  createResourceV1NamespacedResourceClaim: {
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
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  deleteResourceV1CollectionNamespacedResourceClaim: {
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
  readResourceV1NamespacedResourceClaim: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceClaim */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  replaceResourceV1NamespacedResourceClaim: {
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
        /** @description name of the ResourceClaim */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  deleteResourceV1NamespacedResourceClaim: {
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
        /** @description name of the ResourceClaim */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  patchResourceV1NamespacedResourceClaim: {
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
        /** @description name of the ResourceClaim */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  readResourceV1NamespacedResourceClaimStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceClaim */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  replaceResourceV1NamespacedResourceClaimStatus: {
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
        /** @description name of the ResourceClaim */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  patchResourceV1NamespacedResourceClaimStatus: {
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
        /** @description name of the ResourceClaim */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"]
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
  listResourceV1NamespacedResourceClaimTemplate: {
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
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
  createResourceV1NamespacedResourceClaimTemplate: {
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
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
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
  deleteResourceV1CollectionNamespacedResourceClaimTemplate: {
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
  readResourceV1NamespacedResourceClaimTemplate: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceClaimTemplate */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
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
  replaceResourceV1NamespacedResourceClaimTemplate: {
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
        /** @description name of the ResourceClaimTemplate */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
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
  deleteResourceV1NamespacedResourceClaimTemplate: {
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
        /** @description name of the ResourceClaimTemplate */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
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
  patchResourceV1NamespacedResourceClaimTemplate: {
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
        /** @description name of the ResourceClaimTemplate */
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"]
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
  listResourceV1ResourceClaimForAllNamespaces: {
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"]
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
  listResourceV1ResourceClaimTemplateForAllNamespaces: {
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"]
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
  listResourceV1ResourceSlice: {
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSliceList"]
          "application/json;stream=watch": components["schemas"]["io.k8s.api.resource.v1.ResourceSliceList"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSliceList"]
          "application/vnd.kubernetes.protobuf;stream=watch":
            components["schemas"]["io.k8s.api.resource.v1.ResourceSliceList"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSliceList"]
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
  createResourceV1ResourceSlice: {
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
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
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
  deleteResourceV1CollectionResourceSlice: {
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
      path?: never
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
  readResourceV1ResourceSlice: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ResourceSlice */
        name: string
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
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
  replaceResourceV1ResourceSlice: {
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
        /** @description name of the ResourceSlice */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
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
  deleteResourceV1ResourceSlice: {
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
        /** @description name of the ResourceSlice */
        name: string
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
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
  patchResourceV1ResourceSlice: {
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
        /** @description name of the ResourceSlice */
        name: string
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
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/vnd.kubernetes.protobuf": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
          "application/yaml": components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"]
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
  watchResourceV1DeviceClassList: {
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
  watchResourceV1DeviceClass: {
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
        /** @description name of the DeviceClass */
        name: string
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
  watchResourceV1NamespacedResourceClaimList: {
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
  watchResourceV1NamespacedResourceClaim: {
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
        /** @description name of the ResourceClaim */
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
  watchResourceV1NamespacedResourceClaimTemplateList: {
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
  watchResourceV1NamespacedResourceClaimTemplate: {
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
        /** @description name of the ResourceClaimTemplate */
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
  watchResourceV1ResourceClaimListForAllNamespaces: {
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
  watchResourceV1ResourceClaimTemplateListForAllNamespaces: {
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
  watchResourceV1ResourceSliceList: {
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
  watchResourceV1ResourceSlice: {
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
        /** @description name of the ResourceSlice */
        name: string
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
}

export interface api {
  DeviceClass: Omit<components["schemas"]["io.k8s.api.resource.v1.DeviceClass"], "status">
  DeviceClassList: Omit<components["schemas"]["io.k8s.api.resource.v1.DeviceClassList"], "status">
  ResourceClaim: Omit<components["schemas"]["io.k8s.api.resource.v1.ResourceClaim"], "status">
  ResourceClaimList: Omit<components["schemas"]["io.k8s.api.resource.v1.ResourceClaimList"], "status">
  ResourceClaimTemplate: Omit<components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplate"], "status">
  ResourceClaimTemplateList: Omit<components["schemas"]["io.k8s.api.resource.v1.ResourceClaimTemplateList"], "status">
  ResourceSlice: Omit<components["schemas"]["io.k8s.api.resource.v1.ResourceSlice"], "status">
  ResourceSliceList: Omit<components["schemas"]["io.k8s.api.resource.v1.ResourceSliceList"], "status">
  DeleteOptions: Omit<components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"], "status">
  WatchEvent: Omit<components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"], "status">
}

export default api
