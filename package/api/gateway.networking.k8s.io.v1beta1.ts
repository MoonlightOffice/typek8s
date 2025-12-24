export interface paths {
  "/apis/gateway.networking.k8s.io/v1beta1/gatewayclasses": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list objects of kind GatewayClass */
    get: operations["listGatewayNetworkingV1beta1GatewayClass"]
    put?: never
    /** @description create a GatewayClass */
    post: operations["createGatewayNetworkingV1beta1GatewayClass"]
    /** @description delete collection of GatewayClass */
    delete: operations["deleteGatewayNetworkingV1beta1CollectionGatewayClass"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/gatewayclasses/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    /** @description read the specified GatewayClass */
    get: operations["readGatewayNetworkingV1beta1GatewayClass"]
    /** @description replace the specified GatewayClass */
    put: operations["replaceGatewayNetworkingV1beta1GatewayClass"]
    post?: never
    /** @description delete a GatewayClass */
    delete: operations["deleteGatewayNetworkingV1beta1GatewayClass"]
    options?: never
    head?: never
    /** @description partially update the specified GatewayClass */
    patch: operations["patchGatewayNetworkingV1beta1GatewayClass"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/gatewayclasses/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    /** @description read status of the specified GatewayClass */
    get: operations["readGatewayNetworkingV1beta1GatewayClassStatus"]
    /** @description replace status of the specified GatewayClass */
    put: operations["replaceGatewayNetworkingV1beta1GatewayClassStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified GatewayClass */
    patch: operations["patchGatewayNetworkingV1beta1GatewayClassStatus"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/gateways": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
    /** @description list objects of kind Gateway */
    get: operations["listGatewayNetworkingV1beta1GatewayForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/httproutes": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
    /** @description list objects of kind HTTPRoute */
    get: operations["listGatewayNetworkingV1beta1HTTPRouteForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/gateways": {
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
    /** @description list objects of kind Gateway */
    get: operations["listGatewayNetworkingV1beta1NamespacedGateway"]
    put?: never
    /** @description create a Gateway */
    post: operations["createGatewayNetworkingV1beta1NamespacedGateway"]
    /** @description delete collection of Gateway */
    delete: operations["deleteGatewayNetworkingV1beta1CollectionNamespacedGateway"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/gateways/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Gateway */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified Gateway */
    get: operations["readGatewayNetworkingV1beta1NamespacedGateway"]
    /** @description replace the specified Gateway */
    put: operations["replaceGatewayNetworkingV1beta1NamespacedGateway"]
    post?: never
    /** @description delete a Gateway */
    delete: operations["deleteGatewayNetworkingV1beta1NamespacedGateway"]
    options?: never
    head?: never
    /** @description partially update the specified Gateway */
    patch: operations["patchGatewayNetworkingV1beta1NamespacedGateway"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/gateways/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the Gateway */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified Gateway */
    get: operations["readGatewayNetworkingV1beta1NamespacedGatewayStatus"]
    /** @description replace status of the specified Gateway */
    put: operations["replaceGatewayNetworkingV1beta1NamespacedGatewayStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified Gateway */
    patch: operations["patchGatewayNetworkingV1beta1NamespacedGatewayStatus"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/httproutes": {
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
    /** @description list objects of kind HTTPRoute */
    get: operations["listGatewayNetworkingV1beta1NamespacedHTTPRoute"]
    put?: never
    /** @description create a HTTPRoute */
    post: operations["createGatewayNetworkingV1beta1NamespacedHTTPRoute"]
    /** @description delete collection of HTTPRoute */
    delete: operations["deleteGatewayNetworkingV1beta1CollectionNamespacedHTTPRoute"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/httproutes/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the HTTPRoute */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified HTTPRoute */
    get: operations["readGatewayNetworkingV1beta1NamespacedHTTPRoute"]
    /** @description replace the specified HTTPRoute */
    put: operations["replaceGatewayNetworkingV1beta1NamespacedHTTPRoute"]
    post?: never
    /** @description delete a HTTPRoute */
    delete: operations["deleteGatewayNetworkingV1beta1NamespacedHTTPRoute"]
    options?: never
    head?: never
    /** @description partially update the specified HTTPRoute */
    patch: operations["patchGatewayNetworkingV1beta1NamespacedHTTPRoute"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/httproutes/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the HTTPRoute */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified HTTPRoute */
    get: operations["readGatewayNetworkingV1beta1NamespacedHTTPRouteStatus"]
    /** @description replace status of the specified HTTPRoute */
    put: operations["replaceGatewayNetworkingV1beta1NamespacedHTTPRouteStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified HTTPRoute */
    patch: operations["patchGatewayNetworkingV1beta1NamespacedHTTPRouteStatus"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/referencegrants": {
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
    /** @description list objects of kind ReferenceGrant */
    get: operations["listGatewayNetworkingV1beta1NamespacedReferenceGrant"]
    put?: never
    /** @description create a ReferenceGrant */
    post: operations["createGatewayNetworkingV1beta1NamespacedReferenceGrant"]
    /** @description delete collection of ReferenceGrant */
    delete: operations["deleteGatewayNetworkingV1beta1CollectionNamespacedReferenceGrant"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/namespaces/{namespace}/referencegrants/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ReferenceGrant */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified ReferenceGrant */
    get: operations["readGatewayNetworkingV1beta1NamespacedReferenceGrant"]
    /** @description replace the specified ReferenceGrant */
    put: operations["replaceGatewayNetworkingV1beta1NamespacedReferenceGrant"]
    post?: never
    /** @description delete a ReferenceGrant */
    delete: operations["deleteGatewayNetworkingV1beta1NamespacedReferenceGrant"]
    options?: never
    head?: never
    /** @description partially update the specified ReferenceGrant */
    patch: operations["patchGatewayNetworkingV1beta1NamespacedReferenceGrant"]
    trace?: never
  }
  "/apis/gateway.networking.k8s.io/v1beta1/referencegrants": {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
    /** @description list objects of kind ReferenceGrant */
    get: operations["listGatewayNetworkingV1beta1ReferenceGrantForAllNamespaces"]
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
    /** @description FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
     *
     *     Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
     *
     *     The exact format is defined in sigs.k8s.io/structured-merge-diff */
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
      /** @description CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
       *
       *     Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      creationTimestamp?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /**
       * Format: int64
       * @description Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
       */
      deletionGracePeriodSeconds?: number
      /** @description DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
       *
       *     Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      deletionTimestamp?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
      finalizers?: string[]
      /** @description GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
       *
       *     If this field is specified and the generated name exists, the server will return a 409.
       *
       *     Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency */
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
      /** @description Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
       *
       *     Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces */
      namespace?: string
      /** @description List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
      ownerReferences?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference"][]
      /** @description An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
       *
       *     Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency */
      resourceVersion?: string
      /** @description Deprecated: selfLink is a legacy read-only field that is no longer populated by the system. */
      selfLink?: string
      /** @description UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
       *
       *     Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids */
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
      /** @description The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
       *
       *     Examples:
       *       "name" - the field "name" on the current resource
       *       "items[0].name" - the field "name" on the first array entry in "items" */
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
    /** @description Gateway represents an instance of a service-traffic handling infrastructure
     *     by binding Listeners to a set of IP addresses. */
    "io.k8s.networking.gateway.v1beta1.Gateway": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /** @description Spec defines the desired state of Gateway. */
      spec: {
        /** @description Addresses requested for this Gateway. This is optional and behavior can
         *     depend on the implementation. If a value is set in the spec and the
         *     requested address is invalid or unavailable, the implementation MUST
         *     indicate this in the associated entry in GatewayStatus.Addresses.
         *
         *     The Addresses field represents a request for the address(es) on the
         *     "outside of the Gateway", that traffic bound for this Gateway will use.
         *     This could be the IP address or hostname of an external load balancer or
         *     other networking infrastructure, or some other address that traffic will
         *     be sent to.
         *
         *     If no Addresses are specified, the implementation MAY schedule the
         *     Gateway in an implementation-specific manner, assigning an appropriate
         *     set of Addresses.
         *
         *     The implementation MUST bind all Listeners to every GatewayAddress that
         *     it assigns to the Gateway and add a corresponding entry in
         *     GatewayStatus.Addresses.
         *
         *     Support: Extended */
        addresses?: (
          & {
            /**
             * @description Type of the address.
             * @default IPAddress
             */
            type: string
            /** @description When a value is unspecified, an implementation SHOULD automatically
             *     assign an address matching the requested type if possible.
             *
             *     If an implementation does not support an empty value, they MUST set the
             *     "Programmed" condition in status to False with a reason of "AddressNotAssigned".
             *
             *     Examples: `1.2.3.4`, `128::1`, `my-ip-address`. */
            value?: string
          }
          & ({
            /** @enum {unknown} */
            type?: "IPAddress"
            value?: unknown | unknown
          } | {
            type?: unknown
          })
        )[]
        /** @description GatewayClassName used for this Gateway. This is the name of a
         *     GatewayClass resource. */
        gatewayClassName: string
        /** @description Infrastructure defines infrastructure level attributes about this Gateway instance.
         *
         *     Support: Extended */
        infrastructure?: {
          /** @description Annotations that SHOULD be applied to any resources created in response to this Gateway.
           *
           *     For implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.
           *     For other implementations, this refers to any relevant (implementation specific) "annotations" concepts.
           *
           *     An implementation may chose to add additional implementation-specific annotations as they see fit.
           *
           *     Support: Extended */
          annotations?: {
            [key: string]: string
          }
          /** @description Labels that SHOULD be applied to any resources created in response to this Gateway.
           *
           *     For implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.
           *     For other implementations, this refers to any relevant (implementation specific) "labels" concepts.
           *
           *     An implementation may chose to add additional implementation-specific labels as they see fit.
           *
           *     If an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels
           *     change, it SHOULD clearly warn about this behavior in documentation.
           *
           *     Support: Extended */
          labels?: {
            [key: string]: string
          }
          /** @description ParametersRef is a reference to a resource that contains the configuration
           *     parameters corresponding to the Gateway. This is optional if the
           *     controller does not require any additional configuration.
           *
           *     This follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis
           *
           *     The Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,
           *     the merging behavior is implementation specific.
           *     It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
           *
           *     If the referent cannot be found, refers to an unsupported kind, or when
           *     the data within that resource is malformed, the Gateway SHOULD be
           *     rejected with the "Accepted" status condition set to "False" and an
           *     "InvalidParameters" reason.
           *
           *     Support: Implementation-specific */
          parametersRef?: {
            /** @description Group is the group of the referent. */
            group: string
            /** @description Kind is kind of the referent. */
            kind: string
            /** @description Name is the name of the referent. */
            name: string
          }
        }
        /** @description Listeners associated with this Gateway. Listeners define
         *     logical endpoints that are bound on this Gateway's addresses.
         *     At least one Listener MUST be specified.
         *
         *     ## Distinct Listeners
         *
         *     Each Listener in a set of Listeners (for example, in a single Gateway)
         *     MUST be _distinct_, in that a traffic flow MUST be able to be assigned to
         *     exactly one listener. (This section uses "set of Listeners" rather than
         *     "Listeners in a single Gateway" because implementations MAY merge configuration
         *     from multiple Gateways onto a single data plane, and these rules _also_
         *     apply in that case).
         *
         *     Practically, this means that each listener in a set MUST have a unique
         *     combination of Port, Protocol, and, if supported by the protocol, Hostname.
         *
         *     Some combinations of port, protocol, and TLS settings are considered
         *     Core support and MUST be supported by implementations based on the objects
         *     they support:
         *
         *     HTTPRoute
         *
         *     1. HTTPRoute, Port: 80, Protocol: HTTP
         *     2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided
         *
         *     TLSRoute
         *
         *     1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough
         *
         *     "Distinct" Listeners have the following property:
         *
         *     **The implementation can match inbound requests to a single distinct
         *     Listener**.
         *
         *     When multiple Listeners share values for fields (for
         *     example, two Listeners with the same Port value), the implementation
         *     can match requests to only one of the Listeners using other
         *     Listener fields.
         *
         *     When multiple listeners have the same value for the Protocol field, then
         *     each of the Listeners with matching Protocol values MUST have different
         *     values for other fields.
         *
         *     The set of fields that MUST be different for a Listener differs per protocol.
         *     The following rules define the rules for what fields MUST be considered for
         *     Listeners to be distinct with each protocol currently defined in the
         *     Gateway API spec.
         *
         *     The set of listeners that all share a protocol value MUST have _different_
         *     values for _at least one_ of these fields to be distinct:
         *
         *     * **HTTP, HTTPS, TLS**: Port, Hostname
         *     * **TCP, UDP**: Port
         *
         *     One **very** important rule to call out involves what happens when an
         *     implementation:
         *
         *     * Supports TCP protocol Listeners, as well as HTTP, HTTPS, or TLS protocol
         *       Listeners, and
         *     * sees HTTP, HTTPS, or TLS protocols with the same `port` as one with TCP
         *       Protocol.
         *
         *     In this case all the Listeners that share a port with the
         *     TCP Listener are not distinct and so MUST NOT be accepted.
         *
         *     If an implementation does not support TCP Protocol Listeners, then the
         *     previous rule does not apply, and the TCP Listeners SHOULD NOT be
         *     accepted.
         *
         *     Note that the `tls` field is not used for determining if a listener is distinct, because
         *     Listeners that _only_ differ on TLS config will still conflict in all cases.
         *
         *     ### Listeners that are distinct only by Hostname
         *
         *     When the Listeners are distinct based only on Hostname, inbound request
         *     hostnames MUST match from the most specific to least specific Hostname
         *     values to choose the correct Listener and its associated set of Routes.
         *
         *     Exact matches MUST be processed before wildcard matches, and wildcard
         *     matches MUST be processed before fallback (empty Hostname value)
         *     matches. For example, `"foo.example.com"` takes precedence over
         *     `"*.example.com"`, and `"*.example.com"` takes precedence over `""`.
         *
         *     Additionally, if there are multiple wildcard entries, more specific
         *     wildcard entries must be processed before less specific wildcard entries.
         *     For example, `"*.foo.example.com"` takes precedence over `"*.example.com"`.
         *
         *     The precise definition here is that the higher the number of dots in the
         *     hostname to the right of the wildcard character, the higher the precedence.
         *
         *     The wildcard character will match any number of characters _and dots_ to
         *     the left, however, so `"*.example.com"` will match both
         *     `"foo.bar.example.com"` _and_ `"bar.example.com"`.
         *
         *     ## Handling indistinct Listeners
         *
         *     If a set of Listeners contains Listeners that are not distinct, then those
         *     Listeners are _Conflicted_, and the implementation MUST set the "Conflicted"
         *     condition in the Listener Status to "True".
         *
         *     The words "indistinct" and "conflicted" are considered equivalent for the
         *     purpose of this documentation.
         *
         *     Implementations MAY choose to accept a Gateway with some Conflicted
         *     Listeners only if they only accept the partial Listener set that contains
         *     no Conflicted Listeners.
         *
         *     Specifically, an implementation MAY accept a partial Listener set subject to
         *     the following rules:
         *
         *     * The implementation MUST NOT pick one conflicting Listener as the winner.
         *       ALL indistinct Listeners must not be accepted for processing.
         *     * At least one distinct Listener MUST be present, or else the Gateway effectively
         *       contains _no_ Listeners, and must be rejected from processing as a whole.
         *
         *     The implementation MUST set a "ListenersNotValid" condition on the
         *     Gateway Status when the Gateway contains Conflicted Listeners whether or
         *     not they accept the Gateway. That Condition SHOULD clearly
         *     indicate in the Message which Listeners are conflicted, and which are
         *     Accepted. Additionally, the Listener status for those listeners SHOULD
         *     indicate which Listeners are conflicted and not Accepted.
         *
         *     ## General Listener behavior
         *
         *     Note that, for all distinct Listeners, requests SHOULD match at most one Listener.
         *     For example, if Listeners are defined for "foo.example.com" and "*.example.com", a
         *     request to "foo.example.com" SHOULD only be routed using routes attached
         *     to the "foo.example.com" Listener (and not the "*.example.com" Listener).
         *
         *     This concept is known as "Listener Isolation", and it is an Extended feature
         *     of Gateway API. Implementations that do not support Listener Isolation MUST
         *     clearly document this, and MUST NOT claim support for the
         *     `GatewayHTTPListenerIsolation` feature.
         *
         *     Implementations that _do_ support Listener Isolation SHOULD claim support
         *     for the Extended `GatewayHTTPListenerIsolation` feature and pass the associated
         *     conformance tests.
         *
         *     ## Compatible Listeners
         *
         *     A Gateway's Listeners are considered _compatible_ if:
         *
         *     1. They are distinct.
         *     2. The implementation can serve them in compliance with the Addresses
         *        requirement that all Listeners are available on all assigned
         *        addresses.
         *
         *     Compatible combinations in Extended support are expected to vary across
         *     implementations. A combination that is compatible for one implementation
         *     may not be compatible for another.
         *
         *     For example, an implementation that cannot serve both TCP and UDP listeners
         *     on the same address, or cannot mix HTTPS and generic TLS listens on the same port
         *     would not consider those cases compatible, even though they are distinct.
         *
         *     Implementations MAY merge separate Gateways onto a single set of
         *     Addresses if all Listeners across all Gateways are compatible.
         *
         *     In a future release the MinItems=1 requirement MAY be dropped.
         *
         *     Support: Core */
        listeners: {
          /**
           * @description AllowedRoutes defines the types of routes that MAY be attached to a
           *     Listener and the trusted namespaces where those Route resources MAY be
           *     present.
           *
           *     Although a client request may match multiple route rules, only one rule
           *     may ultimately receive the request. Matching precedence MUST be
           *     determined in order of the following criteria:
           *
           *     * The most specific match as defined by the Route type.
           *     * The oldest Route based on creation timestamp. For example, a Route with
           *       a creation timestamp of "2020-09-08 01:02:03" is given precedence over
           *       a Route with a creation timestamp of "2020-09-08 01:02:04".
           *     * If everything else is equivalent, the Route appearing first in
           *       alphabetical order (namespace/name) should be given precedence. For
           *       example, foo/bar is given precedence over foo/baz.
           *
           *     All valid rules within a Route attached to this Listener should be
           *     implemented. Invalid Route rules can be ignored (sometimes that will mean
           *     the full Route). If a Route rule transitions from valid to invalid,
           *     support for that Route rule should be dropped to ensure consistency. For
           *     example, even if a filter specified by a Route rule is invalid, the rest
           *     of the rules within that Route should still be supported.
           *
           *     Support: Core
           * @default {
           *       "namespaces": {
           *         "from": "Same"
           *       }
           *     }
           */
          allowedRoutes: {
            /** @description Kinds specifies the groups and kinds of Routes that are allowed to bind
             *     to this Gateway Listener. When unspecified or empty, the kinds of Routes
             *     selected are determined using the Listener protocol.
             *
             *     A RouteGroupKind MUST correspond to kinds of Routes that are compatible
             *     with the application protocol specified in the Listener's Protocol field.
             *     If an implementation does not support or recognize this resource type, it
             *     MUST set the "ResolvedRefs" condition to False for this Listener with the
             *     "InvalidRouteKinds" reason.
             *
             *     Support: Core */
            kinds?: {
              /**
               * @description Group is the group of the Route.
               * @default gateway.networking.k8s.io
               */
              group: string
              /** @description Kind is the kind of the Route. */
              kind: string
            }[]
            /**
             * @description Namespaces indicates namespaces from which Routes may be attached to this
             *     Listener. This is restricted to the namespace of this Gateway by default.
             *
             *     Support: Core
             * @default {
             *       "from": "Same"
             *     }
             */
            namespaces: {
              /**
               * @description From indicates where Routes will be selected for this Gateway. Possible
               *     values are:
               *
               *     * All: Routes in all namespaces may be used by this Gateway.
               *     * Selector: Routes in namespaces selected by the selector may be used by
               *       this Gateway.
               *     * Same: Only Routes in the same namespace may be used by this Gateway.
               *
               *     Support: Core
               * @default Same
               * @enum {string}
               */
              from: "All" | "Selector" | "Same"
              /** @description Selector must be specified when From is set to "Selector". In that case,
               *     only Routes in Namespaces matching this Selector will be selected by this
               *     Gateway. This field is ignored for other values of "From".
               *
               *     Support: Core */
              selector?: {
                /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                matchExpressions?: {
                  /** @description key is the label key that the selector applies to. */
                  key: string
                  /** @description operator represents a key's relationship to a set of values.
                   *     Valid operators are In, NotIn, Exists and DoesNotExist. */
                  operator: string
                  /** @description values is an array of string values. If the operator is In or NotIn,
                   *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                   *     the values array must be empty. This array is replaced during a strategic
                   *     merge patch. */
                  values?: string[]
                }[]
                /** @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                 *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                 *     operator is "In", and the values array contains only "value". The requirements are ANDed. */
                matchLabels?: {
                  [key: string]: string
                }
              }
            }
          }
          /** @description Hostname specifies the virtual hostname to match for protocol types that
           *     define this concept. When unspecified, all hostnames are matched. This
           *     field is ignored for protocols that don't require hostname based
           *     matching.
           *
           *     Implementations MUST apply Hostname matching appropriately for each of
           *     the following protocols:
           *
           *     * TLS: The Listener Hostname MUST match the SNI.
           *     * HTTP: The Listener Hostname MUST match the Host header of the request.
           *     * HTTPS: The Listener Hostname SHOULD match both the SNI and Host header.
           *       Note that this does not require the SNI and Host header to be the same.
           *       The semantics of this are described in more detail below.
           *
           *     To ensure security, Section 11.1 of RFC-6066 emphasizes that server
           *     implementations that rely on SNI hostname matching MUST also verify
           *     hostnames within the application protocol.
           *
           *     Section 9.1.2 of RFC-7540 provides a mechanism for servers to reject the
           *     reuse of a connection by responding with the HTTP 421 Misdirected Request
           *     status code. This indicates that the origin server has rejected the
           *     request because it appears to have been misdirected.
           *
           *     To detect misdirected requests, Gateways SHOULD match the authority of
           *     the requests with all the SNI hostname(s) configured across all the
           *     Gateway Listeners on the same port and protocol:
           *
           *     * If another Listener has an exact match or more specific wildcard entry,
           *       the Gateway SHOULD return a 421.
           *     * If the current Listener (selected by SNI matching during ClientHello)
           *       does not match the Host:
           *         * If another Listener does match the Host the Gateway SHOULD return a
           *           421.
           *         * If no other Listener matches the Host, the Gateway MUST return a
           *           404.
           *
           *     For HTTPRoute and TLSRoute resources, there is an interaction with the
           *     `spec.hostnames` array. When both listener and route specify hostnames,
           *     there MUST be an intersection between the values for a Route to be
           *     accepted. For more information, refer to the Route specific Hostnames
           *     documentation.
           *
           *     Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
           *     as a suffix match. That means that a match for `*.example.com` would match
           *     both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
           *
           *     Support: Core */
          hostname?: string
          /** @description Name is the name of the Listener. This name MUST be unique within a
           *     Gateway.
           *
           *     Support: Core */
          name: string
          /**
           * Format: int32
           * @description Port is the network port. Multiple listeners may use the
           *     same port, subject to the Listener compatibility rules.
           *
           *     Support: Core
           */
          port: number
          /** @description Protocol specifies the network protocol this listener expects to receive.
           *
           *     Support: Core */
          protocol: string
          /** @description TLS is the TLS configuration for the Listener. This field is required if
           *     the Protocol field is "HTTPS" or "TLS". It is invalid to set this field
           *     if the Protocol field is "HTTP", "TCP", or "UDP".
           *
           *     The association of SNIs to Certificate defined in GatewayTLSConfig is
           *     defined based on the Hostname field for this listener.
           *
           *     The GatewayClass MUST use the longest matching SNI out of all
           *     available certificates for any TLS handshake.
           *
           *     Support: Core */
          tls?: {
            /** @description CertificateRefs contains a series of references to Kubernetes objects that
             *     contains TLS certificates and private keys. These certificates are used to
             *     establish a TLS handshake for requests that match the hostname of the
             *     associated listener.
             *
             *     A single CertificateRef to a Kubernetes Secret has "Core" support.
             *     Implementations MAY choose to support attaching multiple certificates to
             *     a Listener, but this behavior is implementation-specific.
             *
             *     References to a resource in different namespace are invalid UNLESS there
             *     is a ReferenceGrant in the target namespace that allows the certificate
             *     to be attached. If a ReferenceGrant does not allow this reference, the
             *     "ResolvedRefs" condition MUST be set to False for this listener with the
             *     "RefNotPermitted" reason.
             *
             *     This field is required to have at least one element when the mode is set
             *     to "Terminate" (default) and is optional otherwise.
             *
             *     CertificateRefs can reference to standard Kubernetes resources, i.e.
             *     Secret, or implementation-specific custom resources.
             *
             *     Support: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls
             *
             *     Support: Implementation-specific (More than one reference or other resource types) */
            certificateRefs?: {
              /**
               * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
               *     When unspecified or empty string, core API group is inferred.
               * @default
               */
              group: string
              /**
               * @description Kind is kind of the referent. For example "Secret".
               * @default Secret
               */
              kind: string
              /** @description Name is the name of the referent. */
              name: string
              /** @description Namespace is the namespace of the referenced object. When unspecified, the local
               *     namespace is inferred.
               *
               *     Note that when a namespace different than the local namespace is specified,
               *     a ReferenceGrant object is required in the referent namespace to allow that
               *     namespace's owner to accept the reference. See the ReferenceGrant
               *     documentation for details.
               *
               *     Support: Core */
              namespace?: string
            }[]
            /**
             * @description Mode defines the TLS behavior for the TLS session initiated by the client.
             *     There are two possible modes:
             *
             *     - Terminate: The TLS session between the downstream client and the
             *       Gateway is terminated at the Gateway. This mode requires certificates
             *       to be specified in some way, such as populating the certificateRefs
             *       field.
             *     - Passthrough: The TLS session is NOT terminated by the Gateway. This
             *       implies that the Gateway can't decipher the TLS stream except for
             *       the ClientHello message of the TLS protocol. The certificateRefs field
             *       is ignored in this mode.
             *
             *     Support: Core
             * @default Terminate
             * @enum {string}
             */
            mode: "Terminate" | "Passthrough"
            /** @description Options are a list of key/value pairs to enable extended TLS
             *     configuration for each implementation. For example, configuring the
             *     minimum TLS version or supported cipher suites.
             *
             *     A set of common keys MAY be defined by the API in the future. To avoid
             *     any ambiguity, implementation-specific definitions MUST use
             *     domain-prefixed names, such as `example.com/my-custom-option`.
             *     Un-prefixed names are reserved for key names defined by Gateway API.
             *
             *     Support: Implementation-specific */
            options?: {
              [key: string]: string
            }
          }
        }[]
      }
      /**
       * @description Status defines the current state of Gateway.
       * @default {
       *       "conditions": [
       *         {
       *           "lastTransitionTime": "1970-01-01T00:00:00Z",
       *           "message": "Waiting for controller",
       *           "reason": "Pending",
       *           "status": "Unknown",
       *           "type": "Accepted"
       *         },
       *         {
       *           "lastTransitionTime": "1970-01-01T00:00:00Z",
       *           "message": "Waiting for controller",
       *           "reason": "Pending",
       *           "status": "Unknown",
       *           "type": "Programmed"
       *         }
       *       ]
       *     }
       */
      status: {
        /** @description Addresses lists the network addresses that have been bound to the
         *     Gateway.
         *
         *     This list may differ from the addresses provided in the spec under some
         *     conditions:
         *
         *       * no addresses are specified, all addresses are dynamically assigned
         *       * a combination of specified and dynamic addresses are assigned
         *       * a specified address was unusable (e.g. already in use) */
        addresses?: (
          & {
            /**
             * @description Type of the address.
             * @default IPAddress
             */
            type: string
            /** @description Value of the address. The validity of the values will depend
             *     on the type and support by the controller.
             *
             *     Examples: `1.2.3.4`, `128::1`, `my-ip-address`. */
            value: string
          }
          & ({
            /** @enum {unknown} */
            type?: "IPAddress"
            value?: unknown | unknown
          } | {
            type?: unknown
          })
        )[]
        /**
         * @description Conditions describe the current conditions of the Gateway.
         *
         *     Implementations should prefer to express Gateway conditions
         *     using the `GatewayConditionType` and `GatewayConditionReason`
         *     constants so that operators and tools can converge on a common
         *     vocabulary to describe Gateway state.
         *
         *     Known condition types are:
         *
         *     * "Accepted"
         *     * "Programmed"
         *     * "Ready"
         * @default [
         *       {
         *         "lastTransitionTime": "1970-01-01T00:00:00Z",
         *         "message": "Waiting for controller",
         *         "reason": "Pending",
         *         "status": "Unknown",
         *         "type": "Accepted"
         *       },
         *       {
         *         "lastTransitionTime": "1970-01-01T00:00:00Z",
         *         "message": "Waiting for controller",
         *         "reason": "Pending",
         *         "status": "Unknown",
         *         "type": "Programmed"
         *       }
         *     ]
         */
        conditions: {
          /**
           * Format: date-time
           * @description lastTransitionTime is the last time the condition transitioned from one status to another.
           *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
           */
          lastTransitionTime: string
          /** @description message is a human readable message indicating details about the transition.
           *     This may be an empty string. */
          message: string
          /**
           * Format: int64
           * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
           *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
           *     with respect to the current state of the instance.
           */
          observedGeneration?: number
          /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
           *     Producers of specific condition types may define expected values and meanings for this field,
           *     and whether the values are considered a guaranteed API.
           *     The value should be a CamelCase string.
           *     This field may not be empty. */
          reason: string
          /**
           * @description status of the condition, one of True, False, Unknown.
           * @enum {string}
           */
          status: "True" | "False" | "Unknown"
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
          type: string
        }[]
        /** @description Listeners provide status for each unique listener port defined in the Spec. */
        listeners?: {
          /**
           * Format: int32
           * @description AttachedRoutes represents the total number of Routes that have been
           *     successfully attached to this Listener.
           *
           *     Successful attachment of a Route to a Listener is based solely on the
           *     combination of the AllowedRoutes field on the corresponding Listener
           *     and the Route's ParentRefs field. A Route is successfully attached to
           *     a Listener when it is selected by the Listener's AllowedRoutes field
           *     AND the Route has a valid ParentRef selecting the whole Gateway
           *     resource or a specific Listener as a parent resource (more detail on
           *     attachment semantics can be found in the documentation on the various
           *     Route kinds ParentRefs fields). Listener or Route status does not impact
           *     successful attachment, i.e. the AttachedRoutes field count MUST be set
           *     for Listeners with condition Accepted: false and MUST count successfully
           *     attached Routes that may themselves have Accepted: false conditions.
           *
           *     Uses for this field include troubleshooting Route attachment and
           *     measuring blast radius/impact of changes to a Listener.
           */
          attachedRoutes: number
          /** @description Conditions describe the current condition of this listener. */
          conditions: {
            /**
             * Format: date-time
             * @description lastTransitionTime is the last time the condition transitioned from one status to another.
             *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string
            /** @description message is a human readable message indicating details about the transition.
             *     This may be an empty string. */
            message: string
            /**
             * Format: int64
             * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
             *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             *     with respect to the current state of the instance.
             */
            observedGeneration?: number
            /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
             *     Producers of specific condition types may define expected values and meanings for this field,
             *     and whether the values are considered a guaranteed API.
             *     The value should be a CamelCase string.
             *     This field may not be empty. */
            reason: string
            /**
             * @description status of the condition, one of True, False, Unknown.
             * @enum {string}
             */
            status: "True" | "False" | "Unknown"
            /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
            type: string
          }[]
          /** @description Name is the name of the Listener that this status corresponds to. */
          name: string
          /** @description SupportedKinds is the list indicating the Kinds supported by this
           *     listener. This MUST represent the kinds an implementation supports for
           *     that Listener configuration.
           *
           *     If kinds are specified in Spec that are not supported, they MUST NOT
           *     appear in this list and an implementation MUST set the "ResolvedRefs"
           *     condition to "False" with the "InvalidRouteKinds" reason. If both valid
           *     and invalid Route kinds are specified, the implementation MUST
           *     reference the valid Route kinds that have been specified. */
          supportedKinds: {
            /**
             * @description Group is the group of the Route.
             * @default gateway.networking.k8s.io
             */
            group: string
            /** @description Kind is the kind of the Route. */
            kind: string
          }[]
        }[]
      }
    }
    /** @description GatewayClass describes a class of Gateways available to the user for creating
     *     Gateway resources.
     *
     *     It is recommended that this resource be used as a template for Gateways. This
     *     means that a Gateway is based on the state of the GatewayClass at the time it
     *     was created and changes to the GatewayClass or associated parameters are not
     *     propagated down to existing Gateways. This recommendation is intended to
     *     limit the blast radius of changes to GatewayClass or associated parameters.
     *     If implementations choose to propagate GatewayClass changes to existing
     *     Gateways, that MUST be clearly documented by the implementation.
     *
     *     Whenever one or more Gateways are using a GatewayClass, implementations SHOULD
     *     add the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the
     *     associated GatewayClass. This ensures that a GatewayClass associated with a
     *     Gateway is not deleted while in use.
     *
     *     GatewayClass is a Cluster level resource. */
    "io.k8s.networking.gateway.v1beta1.GatewayClass": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /** @description Spec defines the desired state of GatewayClass. */
      spec: {
        /** @description ControllerName is the name of the controller that is managing Gateways of
         *     this class. The value of this field MUST be a domain prefixed path.
         *
         *     Example: "example.net/gateway-controller".
         *
         *     This field is not mutable and cannot be empty.
         *
         *     Support: Core */
        controllerName: string
        /** @description Description helps describe a GatewayClass with more details. */
        description?: string
        /** @description ParametersRef is a reference to a resource that contains the configuration
         *     parameters corresponding to the GatewayClass. This is optional if the
         *     controller does not require any additional configuration.
         *
         *     ParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,
         *     or an implementation-specific custom resource. The resource can be
         *     cluster-scoped or namespace-scoped.
         *
         *     If the referent cannot be found, refers to an unsupported kind, or when
         *     the data within that resource is malformed, the GatewayClass SHOULD be
         *     rejected with the "Accepted" status condition set to "False" and an
         *     "InvalidParameters" reason.
         *
         *     A Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,
         *     the merging behavior is implementation specific.
         *     It is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.
         *
         *     Support: Implementation-specific */
        parametersRef?: {
          /** @description Group is the group of the referent. */
          group: string
          /** @description Kind is kind of the referent. */
          kind: string
          /** @description Name is the name of the referent. */
          name: string
          /** @description Namespace is the namespace of the referent.
           *     This field is required when referring to a Namespace-scoped resource and
           *     MUST be unset when referring to a Cluster-scoped resource. */
          namespace?: string
        }
      }
      /**
       * @description Status defines the current state of GatewayClass.
       *
       *     Implementations MUST populate status on all GatewayClass resources which
       *     specify their controller name.
       * @default {
       *       "conditions": [
       *         {
       *           "lastTransitionTime": "1970-01-01T00:00:00Z",
       *           "message": "Waiting for controller",
       *           "reason": "Pending",
       *           "status": "Unknown",
       *           "type": "Accepted"
       *         }
       *       ]
       *     }
       */
      status: {
        /**
         * @description Conditions is the current status from the controller for
         *     this GatewayClass.
         *
         *     Controllers should prefer to publish conditions using values
         *     of GatewayClassConditionType for the type of each Condition.
         * @default [
         *       {
         *         "lastTransitionTime": "1970-01-01T00:00:00Z",
         *         "message": "Waiting for controller",
         *         "reason": "Pending",
         *         "status": "Unknown",
         *         "type": "Accepted"
         *       }
         *     ]
         */
        conditions: {
          /**
           * Format: date-time
           * @description lastTransitionTime is the last time the condition transitioned from one status to another.
           *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
           */
          lastTransitionTime: string
          /** @description message is a human readable message indicating details about the transition.
           *     This may be an empty string. */
          message: string
          /**
           * Format: int64
           * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
           *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
           *     with respect to the current state of the instance.
           */
          observedGeneration?: number
          /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
           *     Producers of specific condition types may define expected values and meanings for this field,
           *     and whether the values are considered a guaranteed API.
           *     The value should be a CamelCase string.
           *     This field may not be empty. */
          reason: string
          /**
           * @description status of the condition, one of True, False, Unknown.
           * @enum {string}
           */
          status: "True" | "False" | "Unknown"
          /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
          type: string
        }[]
      }
    }
    /** @description GatewayClassList is a list of GatewayClass */
    "io.k8s.networking.gateway.v1beta1.GatewayClassList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of gatewayclasses. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
      items: components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description GatewayList is a list of Gateway */
    "io.k8s.networking.gateway.v1beta1.GatewayList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of gateways. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
      items: components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description HTTPRoute provides a way to route HTTP requests. This includes the capability
     *     to match requests by hostname, path, header, or query param. Filters can be
     *     used to specify additional processing steps. Backends specify where matching
     *     requests should be routed. */
    "io.k8s.networking.gateway.v1beta1.HTTPRoute": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /** @description Spec defines the desired state of HTTPRoute. */
      spec: {
        /** @description Hostnames defines a set of hostnames that should match against the HTTP Host
         *     header to select a HTTPRoute used to process the request. Implementations
         *     MUST ignore any port value specified in the HTTP Host header while
         *     performing a match and (absent of any applicable header modification
         *     configuration) MUST forward this header unmodified to the backend.
         *
         *     Valid values for Hostnames are determined by RFC 1123 definition of a
         *     hostname with 2 notable exceptions:
         *
         *     1. IPs are not allowed.
         *     2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard
         *        label must appear by itself as the first label.
         *
         *     If a hostname is specified by both the Listener and HTTPRoute, there
         *     must be at least one intersecting hostname for the HTTPRoute to be
         *     attached to the Listener. For example:
         *
         *     * A Listener with `test.example.com` as the hostname matches HTTPRoutes
         *       that have either not specified any hostnames, or have specified at
         *       least one of `test.example.com` or `*.example.com`.
         *     * A Listener with `*.example.com` as the hostname matches HTTPRoutes
         *       that have either not specified any hostnames or have specified at least
         *       one hostname that matches the Listener hostname. For example,
         *       `*.example.com`, `test.example.com`, and `foo.test.example.com` would
         *       all match. On the other hand, `example.com` and `test.example.net` would
         *       not match.
         *
         *     Hostnames that are prefixed with a wildcard label (`*.`) are interpreted
         *     as a suffix match. That means that a match for `*.example.com` would match
         *     both `test.example.com`, and `foo.test.example.com`, but not `example.com`.
         *
         *     If both the Listener and HTTPRoute have specified hostnames, any
         *     HTTPRoute hostnames that do not match the Listener hostname MUST be
         *     ignored. For example, if a Listener specified `*.example.com`, and the
         *     HTTPRoute specified `test.example.com` and `test.example.net`,
         *     `test.example.net` must not be considered for a match.
         *
         *     If both the Listener and HTTPRoute have specified hostnames, and none
         *     match with the criteria above, then the HTTPRoute is not accepted. The
         *     implementation must raise an 'Accepted' Condition with a status of
         *     `False` in the corresponding RouteParentStatus.
         *
         *     In the event that multiple HTTPRoutes specify intersecting hostnames (e.g.
         *     overlapping wildcard matching and exact matching hostnames), precedence must
         *     be given to rules from the HTTPRoute with the largest number of:
         *
         *     * Characters in a matching non-wildcard hostname.
         *     * Characters in a matching hostname.
         *
         *     If ties exist across multiple Routes, the matching precedence rules for
         *     HTTPRouteMatches takes over.
         *
         *     Support: Core */
        hostnames?: string[]
        /** @description ParentRefs references the resources (usually Gateways) that a Route wants
         *     to be attached to. Note that the referenced parent resource needs to
         *     allow this for the attachment to be complete. For Gateways, that means
         *     the Gateway needs to allow attachment from Routes of this kind and
         *     namespace. For Services, that means the Service must either be in the same
         *     namespace for a "producer" route, or the mesh implementation must support
         *     and allow "consumer" routes for the referenced Service. ReferenceGrant is
         *     not applicable for governing ParentRefs to Services - it is not possible to
         *     create a "producer" route for a Service in a different namespace from the
         *     Route.
         *
         *     There are two kinds of parent resources with "Core" support:
         *
         *     * Gateway (Gateway conformance profile)
         *     * Service (Mesh conformance profile, ClusterIP Services only)
         *
         *     This API may be extended in the future to support additional kinds of parent
         *     resources.
         *
         *     ParentRefs must be _distinct_. This means either that:
         *
         *     * They select different objects.  If this is the case, then parentRef
         *       entries are distinct. In terms of fields, this means that the
         *       multi-part key defined by `group`, `kind`, `namespace`, and `name` must
         *       be unique across all parentRef entries in the Route.
         *     * They do not select different objects, but for each optional field used,
         *       each ParentRef that selects the same object must set the same set of
         *       optional fields to different values. If one ParentRef sets a
         *       combination of optional fields, all must set the same combination.
         *
         *     Some examples:
         *
         *     * If one ParentRef sets `sectionName`, all ParentRefs referencing the
         *       same object must also set `sectionName`.
         *     * If one ParentRef sets `port`, all ParentRefs referencing the same
         *       object must also set `port`.
         *     * If one ParentRef sets `sectionName` and `port`, all ParentRefs
         *       referencing the same object must also set `sectionName` and `port`.
         *
         *     It is possible to separately reference multiple distinct objects that may
         *     be collapsed by an implementation. For example, some implementations may
         *     choose to merge compatible Gateway Listeners together. If that is the
         *     case, the list of routes attached to those resources should also be
         *     merged.
         *
         *     Note that for ParentRefs that cross namespace boundaries, there are specific
         *     rules. Cross-namespace references are only valid if they are explicitly
         *     allowed by something in the namespace they are referring to. For example,
         *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
         *     generic way to enable other kinds of cross-namespace reference. */
        parentRefs?: {
          /**
           * @description Group is the group of the referent.
           *     When unspecified, "gateway.networking.k8s.io" is inferred.
           *     To set the core API group (such as for a "Service" kind referent),
           *     Group must be explicitly set to "" (empty string).
           *
           *     Support: Core
           * @default gateway.networking.k8s.io
           */
          group: string
          /**
           * @description Kind is kind of the referent.
           *
           *     There are two kinds of parent resources with "Core" support:
           *
           *     * Gateway (Gateway conformance profile)
           *     * Service (Mesh conformance profile, ClusterIP Services only)
           *
           *     Support for other resources is Implementation-Specific.
           * @default Gateway
           */
          kind: string
          /** @description Name is the name of the referent.
           *
           *     Support: Core */
          name: string
          /** @description Namespace is the namespace of the referent. When unspecified, this refers
           *     to the local namespace of the Route.
           *
           *     Note that there are specific rules for ParentRefs which cross namespace
           *     boundaries. Cross-namespace references are only valid if they are explicitly
           *     allowed by something in the namespace they are referring to. For example:
           *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
           *     generic way to enable any other kind of cross-namespace reference.
           *
           *     Support: Core */
          namespace?: string
          /**
           * Format: int32
           * @description Port is the network port this Route targets. It can be interpreted
           *     differently based on the type of parent resource.
           *
           *     When the parent resource is a Gateway, this targets all listeners
           *     listening on the specified port that also support this kind of Route(and
           *     select this Route). It's not recommended to set `Port` unless the
           *     networking behaviors specified in a Route must apply to a specific port
           *     as opposed to a listener(s) whose port(s) may be changed. When both Port
           *     and SectionName are specified, the name and port of the selected listener
           *     must match both specified values.
           *
           *     Implementations MAY choose to support other parent resources.
           *     Implementations supporting other types of parent resources MUST clearly
           *     document how/if Port is interpreted.
           *
           *     For the purpose of status, an attachment is considered successful as
           *     long as the parent resource accepts it partially. For example, Gateway
           *     listeners can restrict which Routes can attach to them by Route kind,
           *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
           *     from the referencing Route, the Route MUST be considered successfully
           *     attached. If no Gateway listeners accept attachment from this Route,
           *     the Route MUST be considered detached from the Gateway.
           *
           *     Support: Extended
           */
          port?: number
          /** @description SectionName is the name of a section within the target resource. In the
           *     following resources, SectionName is interpreted as the following:
           *
           *     * Gateway: Listener name. When both Port (experimental) and SectionName
           *     are specified, the name and port of the selected listener must match
           *     both specified values.
           *     * Service: Port name. When both Port (experimental) and SectionName
           *     are specified, the name and port of the selected listener must match
           *     both specified values.
           *
           *     Implementations MAY choose to support attaching Routes to other resources.
           *     If that is the case, they MUST clearly document how SectionName is
           *     interpreted.
           *
           *     When unspecified (empty string), this will reference the entire resource.
           *     For the purpose of status, an attachment is considered successful if at
           *     least one section in the parent resource accepts it. For example, Gateway
           *     listeners can restrict which Routes can attach to them by Route kind,
           *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
           *     the referencing Route, the Route MUST be considered successfully
           *     attached. If no Gateway listeners accept attachment from this Route, the
           *     Route MUST be considered detached from the Gateway.
           *
           *     Support: Core */
          sectionName?: string
        }[]
        /**
         * @description Rules are a list of HTTP matchers, filters and actions.
         * @default [
         *       {
         *         "matches": [
         *           {
         *             "path": {
         *               "type": "PathPrefix",
         *               "value": "/"
         *             }
         *           }
         *         ]
         *       }
         *     ]
         */
        rules: {
          /** @description BackendRefs defines the backend(s) where matching requests should be
           *     sent.
           *
           *     Failure behavior here depends on how many BackendRefs are specified and
           *     how many are invalid.
           *
           *     If *all* entries in BackendRefs are invalid, and there are also no filters
           *     specified in this route rule, *all* traffic which matches this rule MUST
           *     receive a 500 status code.
           *
           *     See the HTTPBackendRef definition for the rules about what makes a single
           *     HTTPBackendRef invalid.
           *
           *     When a HTTPBackendRef is invalid, 500 status codes MUST be returned for
           *     requests that would have otherwise been routed to an invalid backend. If
           *     multiple backends are specified, and some are invalid, the proportion of
           *     requests that would otherwise have been routed to an invalid backend
           *     MUST receive a 500 status code.
           *
           *     For example, if two backends are specified with equal weights, and one is
           *     invalid, 50 percent of traffic must receive a 500. Implementations may
           *     choose how that 50 percent is determined.
           *
           *     When a HTTPBackendRef refers to a Service that has no ready endpoints,
           *     implementations SHOULD return a 503 for requests to that backend instead.
           *     If an implementation chooses to do this, all of the above rules for 500 responses
           *     MUST also apply for responses that return a 503.
           *
           *     Support: Core for Kubernetes Service
           *
           *     Support: Extended for Kubernetes ServiceImport
           *
           *     Support: Implementation-specific for any other resource
           *
           *     Support for weight: Core */
          backendRefs?: {
            /** @description Filters defined at this level should be executed if and only if the
             *     request is being forwarded to the backend defined here.
             *
             *     Support: Implementation-specific (For broader support of filters, use the
             *     Filters field in HTTPRouteRule.) */
            filters?: {
              /** @description ExtensionRef is an optional, implementation-specific extension to the
               *     "filter" behavior.  For example, resource "myroutefilter" in group
               *     "networking.example.net"). ExtensionRef MUST NOT be used for core and
               *     extended filters.
               *
               *     This filter can be used multiple times within the same rule.
               *
               *     Support: Implementation-specific */
              extensionRef?: {
                /** @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
                 *     When unspecified or empty string, core API group is inferred. */
                group: string
                /** @description Kind is kind of the referent. For example "HTTPRoute" or "Service". */
                kind: string
                /** @description Name is the name of the referent. */
                name: string
              }
              /** @description RequestHeaderModifier defines a schema for a filter that modifies request
               *     headers.
               *
               *     Support: Core */
              requestHeaderModifier?: {
                /** @description Add adds the given header(s) (name, value) to the request
                 *     before the action. It appends to any existing values associated
                 *     with the header name.
                 *
                 *     Input:
                 *       GET /foo HTTP/1.1
                 *       my-header: foo
                 *
                 *     Config:
                 *       add:
                 *       - name: "my-header"
                 *         value: "bar,baz"
                 *
                 *     Output:
                 *       GET /foo HTTP/1.1
                 *       my-header: foo,bar,baz */
                add?: {
                  /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                   *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                   *
                   *     If multiple entries specify equivalent header names, the first entry with
                   *     an equivalent name MUST be considered for a match. Subsequent entries
                   *     with an equivalent header name MUST be ignored. Due to the
                   *     case-insensitivity of header names, "foo" and "Foo" are considered
                   *     equivalent. */
                  name: string
                  /** @description Value is the value of HTTP Header to be matched. */
                  value: string
                }[]
                /** @description Remove the given header(s) from the HTTP request before the action. The
                 *     value of Remove is a list of HTTP header names. Note that the header
                 *     names are case-insensitive (see
                 *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
                 *
                 *     Input:
                 *       GET /foo HTTP/1.1
                 *       my-header1: foo
                 *       my-header2: bar
                 *       my-header3: baz
                 *
                 *     Config:
                 *       remove: ["my-header1", "my-header3"]
                 *
                 *     Output:
                 *       GET /foo HTTP/1.1
                 *       my-header2: bar */
                remove?: string[]
                /** @description Set overwrites the request with the given header (name, value)
                 *     before the action.
                 *
                 *     Input:
                 *       GET /foo HTTP/1.1
                 *       my-header: foo
                 *
                 *     Config:
                 *       set:
                 *       - name: "my-header"
                 *         value: "bar"
                 *
                 *     Output:
                 *       GET /foo HTTP/1.1
                 *       my-header: bar */
                set?: {
                  /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                   *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                   *
                   *     If multiple entries specify equivalent header names, the first entry with
                   *     an equivalent name MUST be considered for a match. Subsequent entries
                   *     with an equivalent header name MUST be ignored. Due to the
                   *     case-insensitivity of header names, "foo" and "Foo" are considered
                   *     equivalent. */
                  name: string
                  /** @description Value is the value of HTTP Header to be matched. */
                  value: string
                }[]
              }
              /** @description RequestMirror defines a schema for a filter that mirrors requests.
               *     Requests are sent to the specified destination, but responses from
               *     that destination are ignored.
               *
               *     This filter can be used multiple times within the same rule. Note that
               *     not all implementations will be able to support mirroring to multiple
               *     backends.
               *
               *     Support: Extended */
              requestMirror?: {
                /** @description BackendRef references a resource where mirrored requests are sent.
                 *
                 *     Mirrored requests must be sent only to a single destination endpoint
                 *     within this BackendRef, irrespective of how many endpoints are present
                 *     within this BackendRef.
                 *
                 *     If the referent cannot be found, this BackendRef is invalid and must be
                 *     dropped from the Gateway. The controller must ensure the "ResolvedRefs"
                 *     condition on the Route status is set to `status: False` and not configure
                 *     this backend in the underlying implementation.
                 *
                 *     If there is a cross-namespace reference to an *existing* object
                 *     that is not allowed by a ReferenceGrant, the controller must ensure the
                 *     "ResolvedRefs"  condition on the Route is set to `status: False`,
                 *     with the "RefNotPermitted" reason and not configure this backend in the
                 *     underlying implementation.
                 *
                 *     In either error case, the Message of the `ResolvedRefs` Condition
                 *     should be used to provide more detail about the problem.
                 *
                 *     Support: Extended for Kubernetes Service
                 *
                 *     Support: Implementation-specific for any other resource */
                backendRef: {
                  /**
                   * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
                   *     When unspecified or empty string, core API group is inferred.
                   * @default
                   */
                  group: string
                  /**
                   * @description Kind is the Kubernetes resource kind of the referent. For example
                   *     "Service".
                   *
                   *     Defaults to "Service" when not specified.
                   *
                   *     ExternalName services can refer to CNAME DNS records that may live
                   *     outside of the cluster and as such are difficult to reason about in
                   *     terms of conformance. They also may not be safe to forward to (see
                   *     CVE-2021-25740 for more information). Implementations SHOULD NOT
                   *     support ExternalName Services.
                   *
                   *     Support: Core (Services with a type other than ExternalName)
                   *
                   *     Support: Implementation-specific (Services with type ExternalName)
                   * @default Service
                   */
                  kind: string
                  /** @description Name is the name of the referent. */
                  name: string
                  /** @description Namespace is the namespace of the backend. When unspecified, the local
                   *     namespace is inferred.
                   *
                   *     Note that when a namespace different than the local namespace is specified,
                   *     a ReferenceGrant object is required in the referent namespace to allow that
                   *     namespace's owner to accept the reference. See the ReferenceGrant
                   *     documentation for details.
                   *
                   *     Support: Core */
                  namespace?: string
                  /**
                   * Format: int32
                   * @description Port specifies the destination port number to use for this resource.
                   *     Port is required when the referent is a Kubernetes Service. In this
                   *     case, the port number is the service port number, not the target port.
                   *     For other resources, destination port might be derived from the referent
                   *     resource or this field.
                   */
                  port?: number
                }
                /** @description Fraction represents the fraction of requests that should be
                 *     mirrored to BackendRef.
                 *
                 *     Only one of Fraction or Percent may be specified. If neither field
                 *     is specified, 100% of requests will be mirrored. */
                fraction?: {
                  /**
                   * Format: int32
                   * @default 100
                   */
                  denominator: number
                  /** Format: int32 */
                  numerator: number
                }
                /**
                 * Format: int32
                 * @description Percent represents the percentage of requests that should be
                 *     mirrored to BackendRef. Its minimum value is 0 (indicating 0% of
                 *     requests) and its maximum value is 100 (indicating 100% of requests).
                 *
                 *     Only one of Fraction or Percent may be specified. If neither field
                 *     is specified, 100% of requests will be mirrored.
                 */
                percent?: number
              }
              /** @description RequestRedirect defines a schema for a filter that responds to the
               *     request with an HTTP redirection.
               *
               *     Support: Core */
              requestRedirect?: {
                /** @description Hostname is the hostname to be used in the value of the `Location`
                 *     header in the response.
                 *     When empty, the hostname in the `Host` header of the request is used.
                 *
                 *     Support: Core */
                hostname?: string
                /** @description Path defines parameters used to modify the path of the incoming request.
                 *     The modified path is then used to construct the `Location` header. When
                 *     empty, the request path is used as-is.
                 *
                 *     Support: Extended */
                path?: {
                  /** @description ReplaceFullPath specifies the value with which to replace the full path
                   *     of a request during a rewrite or redirect. */
                  replaceFullPath?: string
                  /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
                   *     match of a request during a rewrite or redirect. For example, a request
                   *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
                   *     of "/xyz" would be modified to "/xyz/bar".
                   *
                   *     Note that this matches the behavior of the PathPrefix match type. This
                   *     matches full path elements. A path element refers to the list of labels
                   *     in the path split by the `/` separator. When specified, a trailing `/` is
                   *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
                   *     match the prefix `/abc`, but the path `/abcd` would not.
                   *
                   *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
                   *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
                   *     the implementation setting the Accepted Condition for the Route to `status: False`.
                   *
                   *     Request Path | Prefix Match | Replace Prefix | Modified Path */
                  replacePrefixMatch?: string
                  /**
                   * @description Type defines the type of path modifier. Additional types may be
                   *     added in a future release of the API.
                   *
                   *     Note that values may be added to this enum, implementations
                   *     must ensure that unknown values will not cause a crash.
                   *
                   *     Unknown values here must result in the implementation setting the
                   *     Accepted Condition for the Route to `status: False`, with a
                   *     Reason of `UnsupportedValue`.
                   * @enum {string}
                   */
                  type: "ReplaceFullPath" | "ReplacePrefixMatch"
                }
                /**
                 * Format: int32
                 * @description Port is the port to be used in the value of the `Location`
                 *     header in the response.
                 *
                 *     If no port is specified, the redirect port MUST be derived using the
                 *     following rules:
                 *
                 *     * If redirect scheme is not-empty, the redirect port MUST be the well-known
                 *       port associated with the redirect scheme. Specifically "http" to port 80
                 *       and "https" to port 443. If the redirect scheme does not have a
                 *       well-known port, the listener port of the Gateway SHOULD be used.
                 *     * If redirect scheme is empty, the redirect port MUST be the Gateway
                 *       Listener port.
                 *
                 *     Implementations SHOULD NOT add the port number in the 'Location'
                 *     header in the following cases:
                 *
                 *     * A Location header that will use HTTP (whether that is determined via
                 *       the Listener protocol or the Scheme field) _and_ use port 80.
                 *     * A Location header that will use HTTPS (whether that is determined via
                 *       the Listener protocol or the Scheme field) _and_ use port 443.
                 *
                 *     Support: Extended
                 */
                port?: number
                /**
                 * @description Scheme is the scheme to be used in the value of the `Location` header in
                 *     the response. When empty, the scheme of the request is used.
                 *
                 *     Scheme redirects can affect the port of the redirect, for more information,
                 *     refer to the documentation for the port field of this filter.
                 *
                 *     Note that values may be added to this enum, implementations
                 *     must ensure that unknown values will not cause a crash.
                 *
                 *     Unknown values here must result in the implementation setting the
                 *     Accepted Condition for the Route to `status: False`, with a
                 *     Reason of `UnsupportedValue`.
                 *
                 *     Support: Extended
                 * @enum {string}
                 */
                scheme?: "http" | "https"
                /**
                 * @description StatusCode is the HTTP status code to be used in response.
                 *
                 *     Note that values may be added to this enum, implementations
                 *     must ensure that unknown values will not cause a crash.
                 *
                 *     Unknown values here must result in the implementation setting the
                 *     Accepted Condition for the Route to `status: False`, with a
                 *     Reason of `UnsupportedValue`.
                 *
                 *     Support: Core
                 * @default 302
                 * @enum {integer}
                 */
                statusCode: 301 | 302
              }
              /** @description ResponseHeaderModifier defines a schema for a filter that modifies response
               *     headers.
               *
               *     Support: Extended */
              responseHeaderModifier?: {
                /** @description Add adds the given header(s) (name, value) to the request
                 *     before the action. It appends to any existing values associated
                 *     with the header name.
                 *
                 *     Input:
                 *       GET /foo HTTP/1.1
                 *       my-header: foo
                 *
                 *     Config:
                 *       add:
                 *       - name: "my-header"
                 *         value: "bar,baz"
                 *
                 *     Output:
                 *       GET /foo HTTP/1.1
                 *       my-header: foo,bar,baz */
                add?: {
                  /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                   *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                   *
                   *     If multiple entries specify equivalent header names, the first entry with
                   *     an equivalent name MUST be considered for a match. Subsequent entries
                   *     with an equivalent header name MUST be ignored. Due to the
                   *     case-insensitivity of header names, "foo" and "Foo" are considered
                   *     equivalent. */
                  name: string
                  /** @description Value is the value of HTTP Header to be matched. */
                  value: string
                }[]
                /** @description Remove the given header(s) from the HTTP request before the action. The
                 *     value of Remove is a list of HTTP header names. Note that the header
                 *     names are case-insensitive (see
                 *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
                 *
                 *     Input:
                 *       GET /foo HTTP/1.1
                 *       my-header1: foo
                 *       my-header2: bar
                 *       my-header3: baz
                 *
                 *     Config:
                 *       remove: ["my-header1", "my-header3"]
                 *
                 *     Output:
                 *       GET /foo HTTP/1.1
                 *       my-header2: bar */
                remove?: string[]
                /** @description Set overwrites the request with the given header (name, value)
                 *     before the action.
                 *
                 *     Input:
                 *       GET /foo HTTP/1.1
                 *       my-header: foo
                 *
                 *     Config:
                 *       set:
                 *       - name: "my-header"
                 *         value: "bar"
                 *
                 *     Output:
                 *       GET /foo HTTP/1.1
                 *       my-header: bar */
                set?: {
                  /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                   *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                   *
                   *     If multiple entries specify equivalent header names, the first entry with
                   *     an equivalent name MUST be considered for a match. Subsequent entries
                   *     with an equivalent header name MUST be ignored. Due to the
                   *     case-insensitivity of header names, "foo" and "Foo" are considered
                   *     equivalent. */
                  name: string
                  /** @description Value is the value of HTTP Header to be matched. */
                  value: string
                }[]
              }
              /**
               * @description Type identifies the type of filter to apply. As with other API fields,
               *     types are classified into three conformance levels:
               *
               *     - Core: Filter types and their corresponding configuration defined by
               *       "Support: Core" in this package, e.g. "RequestHeaderModifier". All
               *       implementations must support core filters.
               *
               *     - Extended: Filter types and their corresponding configuration defined by
               *       "Support: Extended" in this package, e.g. "RequestMirror". Implementers
               *       are encouraged to support extended filters.
               *
               *     - Implementation-specific: Filters that are defined and supported by
               *       specific vendors.
               *       In the future, filters showing convergence in behavior across multiple
               *       implementations will be considered for inclusion in extended or core
               *       conformance levels. Filter-specific configuration for such filters
               *       is specified using the ExtensionRef field. `Type` should be set to
               *       "ExtensionRef" for custom filters.
               *
               *     Implementers are encouraged to define custom implementation types to
               *     extend the core API with implementation-specific behavior.
               *
               *     If a reference to a custom filter type cannot be resolved, the filter
               *     MUST NOT be skipped. Instead, requests that would have been processed by
               *     that filter MUST receive a HTTP error response.
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               * @enum {string}
               */
              type:
                | "RequestHeaderModifier"
                | "ResponseHeaderModifier"
                | "RequestMirror"
                | "RequestRedirect"
                | "URLRewrite"
                | "ExtensionRef"
              /** @description URLRewrite defines a schema for a filter that modifies a request during forwarding.
               *
               *     Support: Extended */
              urlRewrite?: {
                /** @description Hostname is the value to be used to replace the Host header value during
                 *     forwarding.
                 *
                 *     Support: Extended */
                hostname?: string
                /** @description Path defines a path rewrite.
                 *
                 *     Support: Extended */
                path?: {
                  /** @description ReplaceFullPath specifies the value with which to replace the full path
                   *     of a request during a rewrite or redirect. */
                  replaceFullPath?: string
                  /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
                   *     match of a request during a rewrite or redirect. For example, a request
                   *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
                   *     of "/xyz" would be modified to "/xyz/bar".
                   *
                   *     Note that this matches the behavior of the PathPrefix match type. This
                   *     matches full path elements. A path element refers to the list of labels
                   *     in the path split by the `/` separator. When specified, a trailing `/` is
                   *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
                   *     match the prefix `/abc`, but the path `/abcd` would not.
                   *
                   *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
                   *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
                   *     the implementation setting the Accepted Condition for the Route to `status: False`.
                   *
                   *     Request Path | Prefix Match | Replace Prefix | Modified Path */
                  replacePrefixMatch?: string
                  /**
                   * @description Type defines the type of path modifier. Additional types may be
                   *     added in a future release of the API.
                   *
                   *     Note that values may be added to this enum, implementations
                   *     must ensure that unknown values will not cause a crash.
                   *
                   *     Unknown values here must result in the implementation setting the
                   *     Accepted Condition for the Route to `status: False`, with a
                   *     Reason of `UnsupportedValue`.
                   * @enum {string}
                   */
                  type: "ReplaceFullPath" | "ReplacePrefixMatch"
                }
              }
            }[]
            /**
             * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
             *     When unspecified or empty string, core API group is inferred.
             * @default
             */
            group: string
            /**
             * @description Kind is the Kubernetes resource kind of the referent. For example
             *     "Service".
             *
             *     Defaults to "Service" when not specified.
             *
             *     ExternalName services can refer to CNAME DNS records that may live
             *     outside of the cluster and as such are difficult to reason about in
             *     terms of conformance. They also may not be safe to forward to (see
             *     CVE-2021-25740 for more information). Implementations SHOULD NOT
             *     support ExternalName Services.
             *
             *     Support: Core (Services with a type other than ExternalName)
             *
             *     Support: Implementation-specific (Services with type ExternalName)
             * @default Service
             */
            kind: string
            /** @description Name is the name of the referent. */
            name: string
            /** @description Namespace is the namespace of the backend. When unspecified, the local
             *     namespace is inferred.
             *
             *     Note that when a namespace different than the local namespace is specified,
             *     a ReferenceGrant object is required in the referent namespace to allow that
             *     namespace's owner to accept the reference. See the ReferenceGrant
             *     documentation for details.
             *
             *     Support: Core */
            namespace?: string
            /**
             * Format: int32
             * @description Port specifies the destination port number to use for this resource.
             *     Port is required when the referent is a Kubernetes Service. In this
             *     case, the port number is the service port number, not the target port.
             *     For other resources, destination port might be derived from the referent
             *     resource or this field.
             */
            port?: number
            /**
             * Format: int32
             * @description Weight specifies the proportion of requests forwarded to the referenced
             *     backend. This is computed as weight/(sum of all weights in this
             *     BackendRefs list). For non-zero values, there may be some epsilon from
             *     the exact proportion defined here depending on the precision an
             *     implementation supports. Weight is not a percentage and the sum of
             *     weights does not need to equal 100.
             *
             *     If only one backend is specified and it has a weight greater than 0, 100%
             *     of the traffic is forwarded to that backend. If weight is set to 0, no
             *     traffic should be forwarded for this entry. If unspecified, weight
             *     defaults to 1.
             *
             *     Support for this field varies based on the context where used.
             * @default 1
             */
            weight: number
          }[]
          /** @description Filters define the filters that are applied to requests that match
           *     this rule.
           *
           *     Wherever possible, implementations SHOULD implement filters in the order
           *     they are specified.
           *
           *     Implementations MAY choose to implement this ordering strictly, rejecting
           *     any combination or order of filters that cannot be supported. If implementations
           *     choose a strict interpretation of filter ordering, they MUST clearly document
           *     that behavior.
           *
           *     To reject an invalid combination or order of filters, implementations SHOULD
           *     consider the Route Rules with this configuration invalid. If all Route Rules
           *     in a Route are invalid, the entire Route would be considered invalid. If only
           *     a portion of Route Rules are invalid, implementations MUST set the
           *     "PartiallyInvalid" condition for the Route.
           *
           *     Conformance-levels at this level are defined based on the type of filter:
           *
           *     - ALL core filters MUST be supported by all implementations.
           *     - Implementers are encouraged to support extended filters.
           *     - Implementation-specific custom filters have no API guarantees across
           *       implementations.
           *
           *     Specifying the same filter multiple times is not supported unless explicitly
           *     indicated in the filter.
           *
           *     All filters are expected to be compatible with each other except for the
           *     URLRewrite and RequestRedirect filters, which may not be combined. If an
           *     implementation cannot support other combinations of filters, they must clearly
           *     document that limitation. In cases where incompatible or unsupported
           *     filters are specified and cause the `Accepted` condition to be set to status
           *     `False`, implementations may use the `IncompatibleFilters` reason to specify
           *     this configuration error.
           *
           *     Support: Core */
          filters?: {
            /** @description ExtensionRef is an optional, implementation-specific extension to the
             *     "filter" behavior.  For example, resource "myroutefilter" in group
             *     "networking.example.net"). ExtensionRef MUST NOT be used for core and
             *     extended filters.
             *
             *     This filter can be used multiple times within the same rule.
             *
             *     Support: Implementation-specific */
            extensionRef?: {
              /** @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
               *     When unspecified or empty string, core API group is inferred. */
              group: string
              /** @description Kind is kind of the referent. For example "HTTPRoute" or "Service". */
              kind: string
              /** @description Name is the name of the referent. */
              name: string
            }
            /** @description RequestHeaderModifier defines a schema for a filter that modifies request
             *     headers.
             *
             *     Support: Core */
            requestHeaderModifier?: {
              /** @description Add adds the given header(s) (name, value) to the request
               *     before the action. It appends to any existing values associated
               *     with the header name.
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *     Config:
               *       add:
               *       - name: "my-header"
               *         value: "bar,baz"
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: foo,bar,baz */
              add?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string
                /** @description Value is the value of HTTP Header to be matched. */
                value: string
              }[]
              /** @description Remove the given header(s) from the HTTP request before the action. The
               *     value of Remove is a list of HTTP header names. Note that the header
               *     names are case-insensitive (see
               *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header1: foo
               *       my-header2: bar
               *       my-header3: baz
               *
               *     Config:
               *       remove: ["my-header1", "my-header3"]
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header2: bar */
              remove?: string[]
              /** @description Set overwrites the request with the given header (name, value)
               *     before the action.
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *     Config:
               *       set:
               *       - name: "my-header"
               *         value: "bar"
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: bar */
              set?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string
                /** @description Value is the value of HTTP Header to be matched. */
                value: string
              }[]
            }
            /** @description RequestMirror defines a schema for a filter that mirrors requests.
             *     Requests are sent to the specified destination, but responses from
             *     that destination are ignored.
             *
             *     This filter can be used multiple times within the same rule. Note that
             *     not all implementations will be able to support mirroring to multiple
             *     backends.
             *
             *     Support: Extended */
            requestMirror?: {
              /** @description BackendRef references a resource where mirrored requests are sent.
               *
               *     Mirrored requests must be sent only to a single destination endpoint
               *     within this BackendRef, irrespective of how many endpoints are present
               *     within this BackendRef.
               *
               *     If the referent cannot be found, this BackendRef is invalid and must be
               *     dropped from the Gateway. The controller must ensure the "ResolvedRefs"
               *     condition on the Route status is set to `status: False` and not configure
               *     this backend in the underlying implementation.
               *
               *     If there is a cross-namespace reference to an *existing* object
               *     that is not allowed by a ReferenceGrant, the controller must ensure the
               *     "ResolvedRefs"  condition on the Route is set to `status: False`,
               *     with the "RefNotPermitted" reason and not configure this backend in the
               *     underlying implementation.
               *
               *     In either error case, the Message of the `ResolvedRefs` Condition
               *     should be used to provide more detail about the problem.
               *
               *     Support: Extended for Kubernetes Service
               *
               *     Support: Implementation-specific for any other resource */
              backendRef: {
                /**
                 * @description Group is the group of the referent. For example, "gateway.networking.k8s.io".
                 *     When unspecified or empty string, core API group is inferred.
                 * @default
                 */
                group: string
                /**
                 * @description Kind is the Kubernetes resource kind of the referent. For example
                 *     "Service".
                 *
                 *     Defaults to "Service" when not specified.
                 *
                 *     ExternalName services can refer to CNAME DNS records that may live
                 *     outside of the cluster and as such are difficult to reason about in
                 *     terms of conformance. They also may not be safe to forward to (see
                 *     CVE-2021-25740 for more information). Implementations SHOULD NOT
                 *     support ExternalName Services.
                 *
                 *     Support: Core (Services with a type other than ExternalName)
                 *
                 *     Support: Implementation-specific (Services with type ExternalName)
                 * @default Service
                 */
                kind: string
                /** @description Name is the name of the referent. */
                name: string
                /** @description Namespace is the namespace of the backend. When unspecified, the local
                 *     namespace is inferred.
                 *
                 *     Note that when a namespace different than the local namespace is specified,
                 *     a ReferenceGrant object is required in the referent namespace to allow that
                 *     namespace's owner to accept the reference. See the ReferenceGrant
                 *     documentation for details.
                 *
                 *     Support: Core */
                namespace?: string
                /**
                 * Format: int32
                 * @description Port specifies the destination port number to use for this resource.
                 *     Port is required when the referent is a Kubernetes Service. In this
                 *     case, the port number is the service port number, not the target port.
                 *     For other resources, destination port might be derived from the referent
                 *     resource or this field.
                 */
                port?: number
              }
              /** @description Fraction represents the fraction of requests that should be
               *     mirrored to BackendRef.
               *
               *     Only one of Fraction or Percent may be specified. If neither field
               *     is specified, 100% of requests will be mirrored. */
              fraction?: {
                /**
                 * Format: int32
                 * @default 100
                 */
                denominator: number
                /** Format: int32 */
                numerator: number
              }
              /**
               * Format: int32
               * @description Percent represents the percentage of requests that should be
               *     mirrored to BackendRef. Its minimum value is 0 (indicating 0% of
               *     requests) and its maximum value is 100 (indicating 100% of requests).
               *
               *     Only one of Fraction or Percent may be specified. If neither field
               *     is specified, 100% of requests will be mirrored.
               */
              percent?: number
            }
            /** @description RequestRedirect defines a schema for a filter that responds to the
             *     request with an HTTP redirection.
             *
             *     Support: Core */
            requestRedirect?: {
              /** @description Hostname is the hostname to be used in the value of the `Location`
               *     header in the response.
               *     When empty, the hostname in the `Host` header of the request is used.
               *
               *     Support: Core */
              hostname?: string
              /** @description Path defines parameters used to modify the path of the incoming request.
               *     The modified path is then used to construct the `Location` header. When
               *     empty, the request path is used as-is.
               *
               *     Support: Extended */
              path?: {
                /** @description ReplaceFullPath specifies the value with which to replace the full path
                 *     of a request during a rewrite or redirect. */
                replaceFullPath?: string
                /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
                 *     match of a request during a rewrite or redirect. For example, a request
                 *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
                 *     of "/xyz" would be modified to "/xyz/bar".
                 *
                 *     Note that this matches the behavior of the PathPrefix match type. This
                 *     matches full path elements. A path element refers to the list of labels
                 *     in the path split by the `/` separator. When specified, a trailing `/` is
                 *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
                 *     match the prefix `/abc`, but the path `/abcd` would not.
                 *
                 *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
                 *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
                 *     the implementation setting the Accepted Condition for the Route to `status: False`.
                 *
                 *     Request Path | Prefix Match | Replace Prefix | Modified Path */
                replacePrefixMatch?: string
                /**
                 * @description Type defines the type of path modifier. Additional types may be
                 *     added in a future release of the API.
                 *
                 *     Note that values may be added to this enum, implementations
                 *     must ensure that unknown values will not cause a crash.
                 *
                 *     Unknown values here must result in the implementation setting the
                 *     Accepted Condition for the Route to `status: False`, with a
                 *     Reason of `UnsupportedValue`.
                 * @enum {string}
                 */
                type: "ReplaceFullPath" | "ReplacePrefixMatch"
              }
              /**
               * Format: int32
               * @description Port is the port to be used in the value of the `Location`
               *     header in the response.
               *
               *     If no port is specified, the redirect port MUST be derived using the
               *     following rules:
               *
               *     * If redirect scheme is not-empty, the redirect port MUST be the well-known
               *       port associated with the redirect scheme. Specifically "http" to port 80
               *       and "https" to port 443. If the redirect scheme does not have a
               *       well-known port, the listener port of the Gateway SHOULD be used.
               *     * If redirect scheme is empty, the redirect port MUST be the Gateway
               *       Listener port.
               *
               *     Implementations SHOULD NOT add the port number in the 'Location'
               *     header in the following cases:
               *
               *     * A Location header that will use HTTP (whether that is determined via
               *       the Listener protocol or the Scheme field) _and_ use port 80.
               *     * A Location header that will use HTTPS (whether that is determined via
               *       the Listener protocol or the Scheme field) _and_ use port 443.
               *
               *     Support: Extended
               */
              port?: number
              /**
               * @description Scheme is the scheme to be used in the value of the `Location` header in
               *     the response. When empty, the scheme of the request is used.
               *
               *     Scheme redirects can affect the port of the redirect, for more information,
               *     refer to the documentation for the port field of this filter.
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               *
               *     Support: Extended
               * @enum {string}
               */
              scheme?: "http" | "https"
              /**
               * @description StatusCode is the HTTP status code to be used in response.
               *
               *     Note that values may be added to this enum, implementations
               *     must ensure that unknown values will not cause a crash.
               *
               *     Unknown values here must result in the implementation setting the
               *     Accepted Condition for the Route to `status: False`, with a
               *     Reason of `UnsupportedValue`.
               *
               *     Support: Core
               * @default 302
               * @enum {integer}
               */
              statusCode: 301 | 302
            }
            /** @description ResponseHeaderModifier defines a schema for a filter that modifies response
             *     headers.
             *
             *     Support: Extended */
            responseHeaderModifier?: {
              /** @description Add adds the given header(s) (name, value) to the request
               *     before the action. It appends to any existing values associated
               *     with the header name.
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *     Config:
               *       add:
               *       - name: "my-header"
               *         value: "bar,baz"
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: foo,bar,baz */
              add?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string
                /** @description Value is the value of HTTP Header to be matched. */
                value: string
              }[]
              /** @description Remove the given header(s) from the HTTP request before the action. The
               *     value of Remove is a list of HTTP header names. Note that the header
               *     names are case-insensitive (see
               *     https://datatracker.ietf.org/doc/html/rfc2616#section-4.2).
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header1: foo
               *       my-header2: bar
               *       my-header3: baz
               *
               *     Config:
               *       remove: ["my-header1", "my-header3"]
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header2: bar */
              remove?: string[]
              /** @description Set overwrites the request with the given header (name, value)
               *     before the action.
               *
               *     Input:
               *       GET /foo HTTP/1.1
               *       my-header: foo
               *
               *     Config:
               *       set:
               *       - name: "my-header"
               *         value: "bar"
               *
               *     Output:
               *       GET /foo HTTP/1.1
               *       my-header: bar */
              set?: {
                /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
                 *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                 *
                 *     If multiple entries specify equivalent header names, the first entry with
                 *     an equivalent name MUST be considered for a match. Subsequent entries
                 *     with an equivalent header name MUST be ignored. Due to the
                 *     case-insensitivity of header names, "foo" and "Foo" are considered
                 *     equivalent. */
                name: string
                /** @description Value is the value of HTTP Header to be matched. */
                value: string
              }[]
            }
            /**
             * @description Type identifies the type of filter to apply. As with other API fields,
             *     types are classified into three conformance levels:
             *
             *     - Core: Filter types and their corresponding configuration defined by
             *       "Support: Core" in this package, e.g. "RequestHeaderModifier". All
             *       implementations must support core filters.
             *
             *     - Extended: Filter types and their corresponding configuration defined by
             *       "Support: Extended" in this package, e.g. "RequestMirror". Implementers
             *       are encouraged to support extended filters.
             *
             *     - Implementation-specific: Filters that are defined and supported by
             *       specific vendors.
             *       In the future, filters showing convergence in behavior across multiple
             *       implementations will be considered for inclusion in extended or core
             *       conformance levels. Filter-specific configuration for such filters
             *       is specified using the ExtensionRef field. `Type` should be set to
             *       "ExtensionRef" for custom filters.
             *
             *     Implementers are encouraged to define custom implementation types to
             *     extend the core API with implementation-specific behavior.
             *
             *     If a reference to a custom filter type cannot be resolved, the filter
             *     MUST NOT be skipped. Instead, requests that would have been processed by
             *     that filter MUST receive a HTTP error response.
             *
             *     Note that values may be added to this enum, implementations
             *     must ensure that unknown values will not cause a crash.
             *
             *     Unknown values here must result in the implementation setting the
             *     Accepted Condition for the Route to `status: False`, with a
             *     Reason of `UnsupportedValue`.
             * @enum {string}
             */
            type:
              | "RequestHeaderModifier"
              | "ResponseHeaderModifier"
              | "RequestMirror"
              | "RequestRedirect"
              | "URLRewrite"
              | "ExtensionRef"
            /** @description URLRewrite defines a schema for a filter that modifies a request during forwarding.
             *
             *     Support: Extended */
            urlRewrite?: {
              /** @description Hostname is the value to be used to replace the Host header value during
               *     forwarding.
               *
               *     Support: Extended */
              hostname?: string
              /** @description Path defines a path rewrite.
               *
               *     Support: Extended */
              path?: {
                /** @description ReplaceFullPath specifies the value with which to replace the full path
                 *     of a request during a rewrite or redirect. */
                replaceFullPath?: string
                /** @description ReplacePrefixMatch specifies the value with which to replace the prefix
                 *     match of a request during a rewrite or redirect. For example, a request
                 *     to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch
                 *     of "/xyz" would be modified to "/xyz/bar".
                 *
                 *     Note that this matches the behavior of the PathPrefix match type. This
                 *     matches full path elements. A path element refers to the list of labels
                 *     in the path split by the `/` separator. When specified, a trailing `/` is
                 *     ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all
                 *     match the prefix `/abc`, but the path `/abcd` would not.
                 *
                 *     ReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.
                 *     Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in
                 *     the implementation setting the Accepted Condition for the Route to `status: False`.
                 *
                 *     Request Path | Prefix Match | Replace Prefix | Modified Path */
                replacePrefixMatch?: string
                /**
                 * @description Type defines the type of path modifier. Additional types may be
                 *     added in a future release of the API.
                 *
                 *     Note that values may be added to this enum, implementations
                 *     must ensure that unknown values will not cause a crash.
                 *
                 *     Unknown values here must result in the implementation setting the
                 *     Accepted Condition for the Route to `status: False`, with a
                 *     Reason of `UnsupportedValue`.
                 * @enum {string}
                 */
                type: "ReplaceFullPath" | "ReplacePrefixMatch"
              }
            }
          }[]
          /**
           * @description Matches define conditions used for matching the rule against incoming
           *     HTTP requests. Each match is independent, i.e. this rule will be matched
           *     if **any** one of the matches is satisfied.
           *
           *     For example, take the following matches configuration:
           *
           *     ```
           *     matches:
           *     - path:
           *         value: "/foo"
           *       headers:
           *       - name: "version"
           *         value: "v2"
           *     - path:
           *         value: "/v2/foo"
           *     ```
           *
           *     For a request to match against this rule, a request must satisfy
           *     EITHER of the two conditions:
           *
           *     - path prefixed with `/foo` AND contains the header `version: v2`
           *     - path prefix of `/v2/foo`
           *
           *     See the documentation for HTTPRouteMatch on how to specify multiple
           *     match conditions that should be ANDed together.
           *
           *     If no matches are specified, the default is a prefix
           *     path match on "/", which has the effect of matching every
           *     HTTP request.
           *
           *     Proxy or Load Balancer routing configuration generated from HTTPRoutes
           *     MUST prioritize matches based on the following criteria, continuing on
           *     ties. Across all rules specified on applicable Routes, precedence must be
           *     given to the match having:
           *
           *     * "Exact" path match.
           *     * "Prefix" path match with largest number of characters.
           *     * Method match.
           *     * Largest number of header matches.
           *     * Largest number of query param matches.
           *
           *     Note: The precedence of RegularExpression path matches are implementation-specific.
           *
           *     If ties still exist across multiple Routes, matching precedence MUST be
           *     determined in order of the following criteria, continuing on ties:
           *
           *     * The oldest Route based on creation timestamp.
           *     * The Route appearing first in alphabetical order by
           *       "{namespace}/{name}".
           *
           *     If ties still exist within an HTTPRoute, matching precedence MUST be granted
           *     to the FIRST matching rule (in list order) with a match meeting the above
           *     criteria.
           *
           *     When no rules matching a request have been successfully attached to the
           *     parent a request is coming from, a HTTP 404 status code MUST be returned.
           * @default [
           *       {
           *         "path": {
           *           "type": "PathPrefix",
           *           "value": "/"
           *         }
           *       }
           *     ]
           */
          matches: {
            /** @description Headers specifies HTTP request header matchers. Multiple match values are
             *     ANDed together, meaning, a request must match all the specified headers
             *     to select the route. */
            headers?: {
              /** @description Name is the name of the HTTP Header to be matched. Name matching MUST be
               *     case-insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
               *
               *     If multiple entries specify equivalent header names, only the first
               *     entry with an equivalent name MUST be considered for a match. Subsequent
               *     entries with an equivalent header name MUST be ignored. Due to the
               *     case-insensitivity of header names, "foo" and "Foo" are considered
               *     equivalent.
               *
               *     When a header is repeated in an HTTP request, it is
               *     implementation-specific behavior as to how this is represented.
               *     Generally, proxies should follow the guidance from the RFC:
               *     https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding
               *     processing a repeated header, with special handling for "Set-Cookie". */
              name: string
              /**
               * @description Type specifies how to match against the value of the header.
               *
               *     Support: Core (Exact)
               *
               *     Support: Implementation-specific (RegularExpression)
               *
               *     Since RegularExpression HeaderMatchType has implementation-specific
               *     conformance, implementations can support POSIX, PCRE or any other dialects
               *     of regular expressions. Please read the implementation's documentation to
               *     determine the supported dialect.
               * @default Exact
               * @enum {string}
               */
              type: "Exact" | "RegularExpression"
              /** @description Value is the value of HTTP Header to be matched. */
              value: string
            }[]
            /**
             * @description Method specifies HTTP method matcher.
             *     When specified, this route will be matched only if the request has the
             *     specified method.
             *
             *     Support: Extended
             * @enum {string}
             */
            method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH"
            /**
             * @description Path specifies a HTTP request path matcher. If this field is not
             *     specified, a default prefix match on the "/" path is provided.
             * @default {
             *       "type": "PathPrefix",
             *       "value": "/"
             *     }
             */
            path: {
              /**
               * @description Type specifies how to match against the path Value.
               *
               *     Support: Core (Exact, PathPrefix)
               *
               *     Support: Implementation-specific (RegularExpression)
               * @default PathPrefix
               * @enum {string}
               */
              type: "Exact" | "PathPrefix" | "RegularExpression"
              /**
               * @description Value of the HTTP path to match against.
               * @default /
               */
              value: string
            }
            /** @description QueryParams specifies HTTP query parameter matchers. Multiple match
             *     values are ANDed together, meaning, a request must match all the
             *     specified query parameters to select the route.
             *
             *     Support: Extended */
            queryParams?: {
              /** @description Name is the name of the HTTP query param to be matched. This must be an
               *     exact string match. (See
               *     https://tools.ietf.org/html/rfc7230#section-2.7.3).
               *
               *     If multiple entries specify equivalent query param names, only the first
               *     entry with an equivalent name MUST be considered for a match. Subsequent
               *     entries with an equivalent query param name MUST be ignored.
               *
               *     If a query param is repeated in an HTTP request, the behavior is
               *     purposely left undefined, since different data planes have different
               *     capabilities. However, it is *recommended* that implementations should
               *     match against the first value of the param if the data plane supports it,
               *     as this behavior is expected in other load balancing contexts outside of
               *     the Gateway API.
               *
               *     Users SHOULD NOT route traffic based on repeated query params to guard
               *     themselves against potential differences in the implementations. */
              name: string
              /**
               * @description Type specifies how to match against the value of the query parameter.
               *
               *     Support: Extended (Exact)
               *
               *     Support: Implementation-specific (RegularExpression)
               *
               *     Since RegularExpression QueryParamMatchType has Implementation-specific
               *     conformance, implementations can support POSIX, PCRE or any other
               *     dialects of regular expressions. Please read the implementation's
               *     documentation to determine the supported dialect.
               * @default Exact
               * @enum {string}
               */
              type: "Exact" | "RegularExpression"
              /** @description Value is the value of HTTP query param to be matched. */
              value: string
            }[]
          }[]
          /** @description Timeouts defines the timeouts that can be configured for an HTTP request.
           *
           *     Support: Extended */
          timeouts?: {
            /** @description BackendRequest specifies a timeout for an individual request from the gateway
             *     to a backend. This covers the time from when the request first starts being
             *     sent from the gateway to when the full response has been received from the backend.
             *
             *     Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             *     completely. Implementations that cannot completely disable the timeout MUST
             *     instead interpret the zero duration as the longest possible value to which
             *     the timeout can be set.
             *
             *     An entire client HTTP transaction with a gateway, covered by the Request timeout,
             *     may result in more than one call from the gateway to the destination backend,
             *     for example, if automatic retries are supported.
             *
             *     The value of BackendRequest must be a Gateway API Duration string as defined by
             *     GEP-2257.  When this field is unspecified, its behavior is implementation-specific;
             *     when specified, the value of BackendRequest must be no more than the value of the
             *     Request timeout (since the Request timeout encompasses the BackendRequest timeout).
             *
             *     Support: Extended */
            backendRequest?: string
            /** @description Request specifies the maximum duration for a gateway to respond to an HTTP request.
             *     If the gateway has not been able to respond before this deadline is met, the gateway
             *     MUST return a timeout error.
             *
             *     For example, setting the `rules.timeouts.request` field to the value `10s` in an
             *     `HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds
             *     to complete.
             *
             *     Setting a timeout to the zero duration (e.g. "0s") SHOULD disable the timeout
             *     completely. Implementations that cannot completely disable the timeout MUST
             *     instead interpret the zero duration as the longest possible value to which
             *     the timeout can be set.
             *
             *     This timeout is intended to cover as close to the whole request-response transaction
             *     as possible although an implementation MAY choose to start the timeout after the entire
             *     request stream has been received instead of immediately after the transaction is
             *     initiated by the client.
             *
             *     The value of Request is a Gateway API Duration string as defined by GEP-2257. When this
             *     field is unspecified, request timeout behavior is implementation-specific.
             *
             *     Support: Extended */
            request?: string
          }
        }[]
      }
      /** @description Status defines the current state of HTTPRoute. */
      status?: {
        /** @description Parents is a list of parent resources (usually Gateways) that are
         *     associated with the route, and the status of the route with respect to
         *     each parent. When this route attaches to a parent, the controller that
         *     manages the parent must add an entry to this list when the controller
         *     first sees the route and should update the entry as appropriate when the
         *     route or gateway is modified.
         *
         *     Note that parent references that cannot be resolved by an implementation
         *     of this API will not be added to this list. Implementations of this API
         *     can only populate Route status for the Gateways/parent resources they are
         *     responsible for.
         *
         *     A maximum of 32 Gateways will be represented in this list. An empty list
         *     means the route has not been attached to any Gateway. */
        parents: {
          /** @description Conditions describes the status of the route with respect to the Gateway.
           *     Note that the route's availability is also subject to the Gateway's own
           *     status conditions and listener status.
           *
           *     If the Route's ParentRef specifies an existing Gateway that supports
           *     Routes of this kind AND that Gateway's controller has sufficient access,
           *     then that Gateway's controller MUST set the "Accepted" condition on the
           *     Route, to indicate whether the route has been accepted or rejected by the
           *     Gateway, and why.
           *
           *     A Route MUST be considered "Accepted" if at least one of the Route's
           *     rules is implemented by the Gateway.
           *
           *     There are a number of cases where the "Accepted" condition may not be set
           *     due to lack of controller visibility, that includes when:
           *
           *     * The Route refers to a nonexistent parent.
           *     * The Route is of a type that the controller does not support.
           *     * The Route is in a namespace the controller does not have access to. */
          conditions?: {
            /**
             * Format: date-time
             * @description lastTransitionTime is the last time the condition transitioned from one status to another.
             *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string
            /** @description message is a human readable message indicating details about the transition.
             *     This may be an empty string. */
            message: string
            /**
             * Format: int64
             * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
             *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             *     with respect to the current state of the instance.
             */
            observedGeneration?: number
            /** @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
             *     Producers of specific condition types may define expected values and meanings for this field,
             *     and whether the values are considered a guaranteed API.
             *     The value should be a CamelCase string.
             *     This field may not be empty. */
            reason: string
            /**
             * @description status of the condition, one of True, False, Unknown.
             * @enum {string}
             */
            status: "True" | "False" | "Unknown"
            /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
            type: string
          }[]
          /** @description ControllerName is a domain/path string that indicates the name of the
           *     controller that wrote this status. This corresponds with the
           *     controllerName field on GatewayClass.
           *
           *     Example: "example.net/gateway-controller".
           *
           *     The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
           *     valid Kubernetes names
           *     (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
           *
           *     Controllers MUST populate this field when writing status. Controllers should ensure that
           *     entries to status populated with their ControllerName are cleaned up when they are no
           *     longer necessary. */
          controllerName: string
          /** @description ParentRef corresponds with a ParentRef in the spec that this
           *     RouteParentStatus struct describes the status of. */
          parentRef: {
            /**
             * @description Group is the group of the referent.
             *     When unspecified, "gateway.networking.k8s.io" is inferred.
             *     To set the core API group (such as for a "Service" kind referent),
             *     Group must be explicitly set to "" (empty string).
             *
             *     Support: Core
             * @default gateway.networking.k8s.io
             */
            group: string
            /**
             * @description Kind is kind of the referent.
             *
             *     There are two kinds of parent resources with "Core" support:
             *
             *     * Gateway (Gateway conformance profile)
             *     * Service (Mesh conformance profile, ClusterIP Services only)
             *
             *     Support for other resources is Implementation-Specific.
             * @default Gateway
             */
            kind: string
            /** @description Name is the name of the referent.
             *
             *     Support: Core */
            name: string
            /** @description Namespace is the namespace of the referent. When unspecified, this refers
             *     to the local namespace of the Route.
             *
             *     Note that there are specific rules for ParentRefs which cross namespace
             *     boundaries. Cross-namespace references are only valid if they are explicitly
             *     allowed by something in the namespace they are referring to. For example:
             *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             *     generic way to enable any other kind of cross-namespace reference.
             *
             *     Support: Core */
            namespace?: string
            /**
             * Format: int32
             * @description Port is the network port this Route targets. It can be interpreted
             *     differently based on the type of parent resource.
             *
             *     When the parent resource is a Gateway, this targets all listeners
             *     listening on the specified port that also support this kind of Route(and
             *     select this Route). It's not recommended to set `Port` unless the
             *     networking behaviors specified in a Route must apply to a specific port
             *     as opposed to a listener(s) whose port(s) may be changed. When both Port
             *     and SectionName are specified, the name and port of the selected listener
             *     must match both specified values.
             *
             *     Implementations MAY choose to support other parent resources.
             *     Implementations supporting other types of parent resources MUST clearly
             *     document how/if Port is interpreted.
             *
             *     For the purpose of status, an attachment is considered successful as
             *     long as the parent resource accepts it partially. For example, Gateway
             *     listeners can restrict which Routes can attach to them by Route kind,
             *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
             *     from the referencing Route, the Route MUST be considered successfully
             *     attached. If no Gateway listeners accept attachment from this Route,
             *     the Route MUST be considered detached from the Gateway.
             *
             *     Support: Extended
             */
            port?: number
            /** @description SectionName is the name of a section within the target resource. In the
             *     following resources, SectionName is interpreted as the following:
             *
             *     * Gateway: Listener name. When both Port (experimental) and SectionName
             *     are specified, the name and port of the selected listener must match
             *     both specified values.
             *     * Service: Port name. When both Port (experimental) and SectionName
             *     are specified, the name and port of the selected listener must match
             *     both specified values.
             *
             *     Implementations MAY choose to support attaching Routes to other resources.
             *     If that is the case, they MUST clearly document how SectionName is
             *     interpreted.
             *
             *     When unspecified (empty string), this will reference the entire resource.
             *     For the purpose of status, an attachment is considered successful if at
             *     least one section in the parent resource accepts it. For example, Gateway
             *     listeners can restrict which Routes can attach to them by Route kind,
             *     namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
             *     the referencing Route, the Route MUST be considered successfully
             *     attached. If no Gateway listeners accept attachment from this Route, the
             *     Route MUST be considered detached from the Gateway.
             *
             *     Support: Core */
            sectionName?: string
          }
        }[]
      }
    }
    /** @description HTTPRouteList is a list of HTTPRoute */
    "io.k8s.networking.gateway.v1beta1.HTTPRouteList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of httproutes. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
      items: components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description ReferenceGrant identifies kinds of resources in other namespaces that are
     *     trusted to reference the specified kinds of resources in the same namespace
     *     as the policy.
     *
     *     Each ReferenceGrant can be used to represent a unique trust relationship.
     *     Additional Reference Grants can be used to add to the set of trusted
     *     sources of inbound references for the namespace they are defined within.
     *
     *     All cross-namespace references in Gateway API (with the exception of cross-namespace
     *     Gateway-route attachment) require a ReferenceGrant.
     *
     *     ReferenceGrant is a form of runtime verification allowing users to assert
     *     which cross-namespace object references are permitted. Implementations that
     *     support ReferenceGrant MUST NOT permit cross-namespace references which have
     *     no grant, and MUST respond to the removal of a grant by revoking the access
     *     that the grant allowed. */
    "io.k8s.networking.gateway.v1beta1.ReferenceGrant": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /** @description Spec defines the desired state of ReferenceGrant. */
      spec?: {
        /** @description From describes the trusted namespaces and kinds that can reference the
         *     resources described in "To". Each entry in this list MUST be considered
         *     to be an additional place that references can be valid from, or to put
         *     this another way, entries MUST be combined using OR.
         *
         *     Support: Core */
        from: {
          /** @description Group is the group of the referent.
           *     When empty, the Kubernetes core API group is inferred.
           *
           *     Support: Core */
          group: string
          /** @description Kind is the kind of the referent. Although implementations may support
           *     additional resources, the following types are part of the "Core"
           *     support level for this field.
           *
           *     When used to permit a SecretObjectReference:
           *
           *     * Gateway
           *
           *     When used to permit a BackendObjectReference:
           *
           *     * GRPCRoute
           *     * HTTPRoute
           *     * TCPRoute
           *     * TLSRoute
           *     * UDPRoute */
          kind: string
          /** @description Namespace is the namespace of the referent.
           *
           *     Support: Core */
          namespace: string
        }[]
        /** @description To describes the resources that may be referenced by the resources
         *     described in "From". Each entry in this list MUST be considered to be an
         *     additional place that references can be valid to, or to put this another
         *     way, entries MUST be combined using OR.
         *
         *     Support: Core */
        to: {
          /** @description Group is the group of the referent.
           *     When empty, the Kubernetes core API group is inferred.
           *
           *     Support: Core */
          group: string
          /** @description Kind is the kind of the referent. Although implementations may support
           *     additional resources, the following types are part of the "Core"
           *     support level for this field:
           *
           *     * Secret when used to permit a SecretObjectReference
           *     * Service when used to permit a BackendObjectReference */
          kind: string
          /** @description Name is the name of the referent. When unspecified, this policy
           *     refers to all resources of the specified Group and Kind in the local
           *     namespace. */
          name?: string
        }[]
      }
    }
    /** @description ReferenceGrantList is a list of ReferenceGrant */
    "io.k8s.networking.gateway.v1beta1.ReferenceGrantList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of referencegrants. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
      items: components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  listGatewayNetworkingV1beta1GatewayClass: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClassList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClassList"]
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
  createGatewayNetworkingV1beta1GatewayClass: {
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
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  deleteGatewayNetworkingV1beta1CollectionGatewayClass: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
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
  readGatewayNetworkingV1beta1GatewayClass: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the GatewayClass */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  replaceGatewayNetworkingV1beta1GatewayClass: {
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
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  deleteGatewayNetworkingV1beta1GatewayClass: {
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
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
        "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
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
  patchGatewayNetworkingV1beta1GatewayClass: {
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
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  readGatewayNetworkingV1beta1GatewayClassStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the GatewayClass */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  replaceGatewayNetworkingV1beta1GatewayClassStatus: {
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
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  patchGatewayNetworkingV1beta1GatewayClassStatus: {
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
        /** @description name of the GatewayClass */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/apply-patch+yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/json-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
        "application/merge-patch+json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Patch"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"]
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
  listGatewayNetworkingV1beta1GatewayForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayList"]
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
  listGatewayNetworkingV1beta1HTTPRouteForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRouteList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRouteList"]
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
  listGatewayNetworkingV1beta1NamespacedGateway: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayList"]
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
  createGatewayNetworkingV1beta1NamespacedGateway: {
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
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  deleteGatewayNetworkingV1beta1CollectionNamespacedGateway: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
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
  readGatewayNetworkingV1beta1NamespacedGateway: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the Gateway */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  replaceGatewayNetworkingV1beta1NamespacedGateway: {
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
        /** @description name of the Gateway */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  deleteGatewayNetworkingV1beta1NamespacedGateway: {
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
        /** @description name of the Gateway */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
        "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
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
  patchGatewayNetworkingV1beta1NamespacedGateway: {
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
        /** @description name of the Gateway */
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
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  readGatewayNetworkingV1beta1NamespacedGatewayStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the Gateway */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  replaceGatewayNetworkingV1beta1NamespacedGatewayStatus: {
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
        /** @description name of the Gateway */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  patchGatewayNetworkingV1beta1NamespacedGatewayStatus: {
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
        /** @description name of the Gateway */
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
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"]
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
  listGatewayNetworkingV1beta1NamespacedHTTPRoute: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRouteList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRouteList"]
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
  createGatewayNetworkingV1beta1NamespacedHTTPRoute: {
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
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  deleteGatewayNetworkingV1beta1CollectionNamespacedHTTPRoute: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
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
  readGatewayNetworkingV1beta1NamespacedHTTPRoute: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the HTTPRoute */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  replaceGatewayNetworkingV1beta1NamespacedHTTPRoute: {
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
        /** @description name of the HTTPRoute */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  deleteGatewayNetworkingV1beta1NamespacedHTTPRoute: {
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
        /** @description name of the HTTPRoute */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
        "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
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
  patchGatewayNetworkingV1beta1NamespacedHTTPRoute: {
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
        /** @description name of the HTTPRoute */
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
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  readGatewayNetworkingV1beta1NamespacedHTTPRouteStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the HTTPRoute */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  replaceGatewayNetworkingV1beta1NamespacedHTTPRouteStatus: {
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
        /** @description name of the HTTPRoute */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  patchGatewayNetworkingV1beta1NamespacedHTTPRouteStatus: {
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
        /** @description name of the HTTPRoute */
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
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"]
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
  listGatewayNetworkingV1beta1NamespacedReferenceGrant: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrantList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrantList"]
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
  createGatewayNetworkingV1beta1NamespacedReferenceGrant: {
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
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
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
  deleteGatewayNetworkingV1beta1CollectionNamespacedReferenceGrant: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Status"]
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
  readGatewayNetworkingV1beta1NamespacedReferenceGrant: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the ReferenceGrant */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
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
  replaceGatewayNetworkingV1beta1NamespacedReferenceGrant: {
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
        /** @description name of the ReferenceGrant */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
        "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
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
  deleteGatewayNetworkingV1beta1NamespacedReferenceGrant: {
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
        /** @description name of the ReferenceGrant */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        "application/json": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
        "application/yaml": components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"]
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
  patchGatewayNetworkingV1beta1NamespacedReferenceGrant: {
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
        /** @description name of the ReferenceGrant */
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
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"]
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
  listGatewayNetworkingV1beta1ReferenceGrantForAllNamespaces: {
    parameters: {
      query?: {
        /** @description allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
        allowWatchBookmarks?: boolean
        /** @description The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
         *
         *     This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
        continue?: string
        /** @description A selector to restrict the list of returned objects by their fields. Defaults to everything. */
        fieldSelector?: string
        /** @description A selector to restrict the list of returned objects by their labels. Defaults to everything. */
        labelSelector?: string
        /** @description limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
         *
         *     The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
        limit?: number
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /** @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersion?: string
        /** @description resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset */
        resourceVersionMatch?: string
        /** @description `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
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
         *     Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
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
          "application/json": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrantList"]
          "application/yaml": components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrantList"]
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
  Gateway: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.Gateway"], "status">
  GatewayClass: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClass"], "status">
  GatewayClassList: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayClassList"], "status">
  GatewayList: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.GatewayList"], "status">
  HTTPRoute: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRoute"], "status">
  HTTPRouteList: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.HTTPRouteList"], "status">
  ReferenceGrant: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrant"], "status">
  ReferenceGrantList: Omit<components["schemas"]["io.k8s.networking.gateway.v1beta1.ReferenceGrantList"], "status">
}

export default api
