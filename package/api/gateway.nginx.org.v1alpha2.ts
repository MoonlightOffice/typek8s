export interface paths {
  "/apis/gateway.nginx.org/v1alpha2/namespaces/{namespace}/nginxproxies": {
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
    /** @description list objects of kind NginxProxy */
    get: operations["listGatewayNginxOrgV1alpha2NamespacedNginxProxy"]
    put?: never
    /** @description create a NginxProxy */
    post: operations["createGatewayNginxOrgV1alpha2NamespacedNginxProxy"]
    /** @description delete collection of NginxProxy */
    delete: operations["deleteGatewayNginxOrgV1alpha2CollectionNamespacedNginxProxy"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.nginx.org/v1alpha2/namespaces/{namespace}/nginxproxies/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the NginxProxy */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified NginxProxy */
    get: operations["readGatewayNginxOrgV1alpha2NamespacedNginxProxy"]
    /** @description replace the specified NginxProxy */
    put: operations["replaceGatewayNginxOrgV1alpha2NamespacedNginxProxy"]
    post?: never
    /** @description delete a NginxProxy */
    delete: operations["deleteGatewayNginxOrgV1alpha2NamespacedNginxProxy"]
    options?: never
    head?: never
    /** @description partially update the specified NginxProxy */
    patch: operations["patchGatewayNginxOrgV1alpha2NamespacedNginxProxy"]
    trace?: never
  }
  "/apis/gateway.nginx.org/v1alpha2/namespaces/{namespace}/observabilitypolicies": {
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
    /** @description list objects of kind ObservabilityPolicy */
    get: operations["listGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy"]
    put?: never
    /** @description create an ObservabilityPolicy */
    post: operations["createGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy"]
    /** @description delete collection of ObservabilityPolicy */
    delete: operations["deleteGatewayNginxOrgV1alpha2CollectionNamespacedObservabilityPolicy"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.nginx.org/v1alpha2/namespaces/{namespace}/observabilitypolicies/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ObservabilityPolicy */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read the specified ObservabilityPolicy */
    get: operations["readGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy"]
    /** @description replace the specified ObservabilityPolicy */
    put: operations["replaceGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy"]
    post?: never
    /** @description delete an ObservabilityPolicy */
    delete: operations["deleteGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy"]
    options?: never
    head?: never
    /** @description partially update the specified ObservabilityPolicy */
    patch: operations["patchGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy"]
    trace?: never
  }
  "/apis/gateway.nginx.org/v1alpha2/namespaces/{namespace}/observabilitypolicies/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the ObservabilityPolicy */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    /** @description read status of the specified ObservabilityPolicy */
    get: operations["readGatewayNginxOrgV1alpha2NamespacedObservabilityPolicyStatus"]
    /** @description replace status of the specified ObservabilityPolicy */
    put: operations["replaceGatewayNginxOrgV1alpha2NamespacedObservabilityPolicyStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified ObservabilityPolicy */
    patch: operations["patchGatewayNginxOrgV1alpha2NamespacedObservabilityPolicyStatus"]
    trace?: never
  }
  "/apis/gateway.nginx.org/v1alpha2/nginxproxies": {
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
    /** @description list objects of kind NginxProxy */
    get: operations["listGatewayNginxOrgV1alpha2NginxProxyForAllNamespaces"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/gateway.nginx.org/v1alpha2/observabilitypolicies": {
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
    /** @description list objects of kind ObservabilityPolicy */
    get: operations["listGatewayNginxOrgV1alpha2ObservabilityPolicyForAllNamespaces"]
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
    /**
     * @description NginxProxy is a configuration object that can be referenced from a GatewayClass parametersRef
     *     or a Gateway infrastructure.parametersRef. It provides a way to configure data plane settings.
     *     If referenced from a GatewayClass, the settings apply to all Gateways attached to the GatewayClass.
     *     If referenced from a Gateway, the settings apply to that Gateway alone. If both a Gateway and its GatewayClass
     *     reference an NginxProxy, the settings are merged. Settings specified on the Gateway NginxProxy override those
     *     set on the GatewayClass NginxProxy.
     */
    "org.nginx.gateway.v1alpha2.NginxProxy": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /** @description Spec defines the desired state of the NginxProxy. */
      spec: {
        /**
         * @description DisableHTTP2 defines if http2 should be disabled for all servers.
         *     If not specified, or set to false, http2 will be enabled for all servers.
         */
        disableHTTP2?: boolean
        /**
         * @description DisableSNIHostValidation disables the validation that ensures the SNI hostname
         *     matches the Host header in HTTPS requests. When disabled, HTTPS connections can
         *     be reused for requests to different hostnames covered by the same certificate.
         *     This resolves HTTP/2 connection coalescing issues with wildcard certificates but
         *     introduces security risks as described in Gateway API GEP-3567.
         *     If not specified, defaults to false (validation enabled).
         */
        disableSNIHostValidation?: boolean
        /**
         * @description DNSResolver specifies the DNS resolver configuration for external name resolution.
         *     This enables support for routing to ExternalName Services.
         */
        dnsResolver?: {
          /**
           * @description Addresses specifies the list of DNS server addresses.
           *     Each address can be an IP address or hostname.
           *     Example: [{"type": "IPAddress", "value": "8.8.8.8"}, {"type": "Hostname", "value": "dns.google"}]
           */
          addresses: {
            /**
             * @description Type specifies the type of address.
             * @enum {string}
             */
            type: "IPAddress" | "Hostname"
            /**
             * @description Value specifies the address value.
             *     When Type is "IPAddress", this must be a valid IPv4 or IPv6 address.
             *     When Type is "Hostname", this must be a valid hostname.
             */
            value: string
          }[]
          /** @description CacheTTL specifies how long to cache DNS responses. */
          cacheTTL?: string
          /**
           * @description DisableIPv6 disables IPv6 lookups.
           *     If not specified, or set to false, IPv6 lookups will be enabled.
           */
          disableIPv6?: boolean
          /** @description Timeout specifies the timeout for name resolution. */
          timeout?: string
        }
        /**
         * @description IPFamily specifies the IP family to be used by the NGINX.
         *     Default is "dual", meaning the server will use both IPv4 and IPv6.
         * @default dual
         * @enum {string}
         */
        ipFamily: "dual" | "ipv4" | "ipv6"
        /** @description Kubernetes contains the configuration for the NGINX Deployment and Service Kubernetes objects. */
        kubernetes?: {
          /** @description DaemonSet is the configuration for the NGINX DaemonSet. */
          daemonSet?: {
            /** @description Container defines container fields for the NGINX container. */
            container?: {
              /** @description Debug enables debugging for NGINX by using the nginx-debug binary. */
              debug?: boolean
              /** @description HostPorts are the list of ports to expose on the host. */
              hostPorts?: {
                /**
                 * Format: int32
                 * @description ContainerPort is the port on the nginx container to map to the HostPort.
                 */
                containerPort: number
                /**
                 * Format: int32
                 * @description Port to expose on the host.
                 */
                port: number
              }[]
              /** @description Image is the NGINX image to use. */
              image?: {
                /**
                 * @description PullPolicy describes a policy for if/when to pull a container image.
                 * @default IfNotPresent
                 * @enum {string}
                 */
                pullPolicy: "Always" | "Never" | "IfNotPresent"
                /**
                 * @description Repository is the image path.
                 *     Default is ghcr.io/nginx/nginx-gateway-fabric/nginx.
                 */
                repository?: string
                /** @description Tag is the image tag to use. Default matches the tag of the control plane. */
                tag?: string
              }
              /**
               * @description Lifecycle describes actions that the management system should take in response to container lifecycle
               *     events. For the PostStart and PreStop lifecycle handlers, management of the container blocks
               *     until the action is complete, unless the container process fails, in which case the handler is aborted.
               */
              lifecycle?: {
                /**
                 * @description PostStart is called immediately after a container is created. If the handler fails,
                 *     the container is terminated and restarted according to its restart policy.
                 *     Other management of the container blocks until the hook completes.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
                 */
                postStart?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /**
                     * @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                     */
                    command?: string[]
                  }
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /**
                     * @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead.
                     */
                    host?: string
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /**
                       * @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header.
                       */
                      name: string
                      /** @description The header field value */
                      value: string
                    }[]
                    /** @description Path to access on the HTTP server. */
                    path?: string
                    /**
                     * @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                    /**
                     * @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP.
                     */
                    scheme?: string
                  }
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number
                  }
                  /**
                   * @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified.
                   */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string
                    /**
                     * @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                  }
                }
                /**
                 * @description PreStop is called immediately before a container is terminated due to an
                 *     API request or management event such as liveness/startup probe failure,
                 *     preemption, resource contention, etc. The handler is not called if the
                 *     container crashes or exits. The Pod's termination grace period countdown begins before the
                 *     PreStop hook is executed. Regardless of the outcome of the handler, the
                 *     container will eventually terminate within the Pod's termination grace
                 *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
                 *     or until the termination grace period is reached.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
                 */
                preStop?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /**
                     * @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                     */
                    command?: string[]
                  }
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /**
                     * @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead.
                     */
                    host?: string
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /**
                       * @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header.
                       */
                      name: string
                      /** @description The header field value */
                      value: string
                    }[]
                    /** @description Path to access on the HTTP server. */
                    path?: string
                    /**
                     * @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                    /**
                     * @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP.
                     */
                    scheme?: string
                  }
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number
                  }
                  /**
                   * @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified.
                   */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string
                    /**
                     * @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                  }
                }
                /**
                 * @description StopSignal defines which signal will be sent to a container when it is being stopped.
                 *     If not specified, the default is defined by the container runtime in use.
                 *     StopSignal can only be set for Pods with a non-empty .spec.os.name
                 */
                stopSignal?: string
              }
              /** @description ReadinessProbe defines the readiness probe for the NGINX container. */
              readinessProbe?: {
                /**
                 * Format: int32
                 * @description InitialDelaySeconds is the number of seconds after the container has
                 *     started before the readiness probe is initiated.
                 *     If not specified, the default is 3 seconds.
                 */
                initialDelaySeconds?: number
                /**
                 * Format: int32
                 * @description Port is the port on which the readiness endpoint is exposed.
                 *     If not specified, the default port is 8081.
                 */
                port?: number
              }
              /** @description Resources describes the compute resource requirements. */
              resources?: {
                /**
                 * @description Claims lists the names of resources, defined in spec.resourceClaims,
                 *     that are used by this container.
                 *
                 *     This field depends on the
                 *     DynamicResourceAllocation feature gate.
                 *
                 *     This field is immutable. It can only be set for containers.
                 */
                claims?: {
                  /**
                   * @description Name must match the name of one entry in pod.spec.resourceClaims of
                   *     the Pod where this field is used. It makes that resource available
                   *     inside a container.
                   */
                  name: string
                  /**
                   * @description Request is the name chosen for a request in the referenced claim.
                   *     If empty, everything from the claim is made available, otherwise
                   *     only the result of this request.
                   */
                  request?: string
                }[]
                /**
                 * @description Limits describes the maximum amount of compute resources allowed.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                limits?: {
                  [key: string]: number | string
                }
                /**
                 * @description Requests describes the minimum amount of compute resources required.
                 *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                 *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                requests?: {
                  [key: string]: number | string
                }
              }
              /** @description VolumeMounts describe the mounting of Volumes within a container. */
              volumeMounts?: {
                /**
                 * @description Path within the container at which the volume should be mounted.  Must
                 *     not contain ':'.
                 */
                mountPath: string
                /**
                 * @description mountPropagation determines how mounts are propagated from the host
                 *     to container and the other way around.
                 *     When not set, MountPropagationNone is used.
                 *     This field is beta in 1.10.
                 *     When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
                 *     (which defaults to None).
                 */
                mountPropagation?: string
                /** @description This must match the Name of a Volume. */
                name: string
                /**
                 * @description Mounted read-only if true, read-write otherwise (false or unspecified).
                 *     Defaults to false.
                 */
                readOnly?: boolean
                /**
                 * @description RecursiveReadOnly specifies whether read-only mounts should be handled
                 *     recursively.
                 *
                 *     If ReadOnly is false, this field has no meaning and must be unspecified.
                 *
                 *     If ReadOnly is true, and this field is set to Disabled, the mount is not made
                 *     recursively read-only.  If this field is set to IfPossible, the mount is made
                 *     recursively read-only, if it is supported by the container runtime.  If this
                 *     field is set to Enabled, the mount is made recursively read-only if it is
                 *     supported by the container runtime, otherwise the pod will not be started and
                 *     an error will be generated to indicate the reason.
                 *
                 *     If this field is set to IfPossible or Enabled, MountPropagation must be set to
                 *     None (or be unspecified, which defaults to None).
                 *
                 *     If this field is not specified, it is treated as an equivalent of Disabled.
                 */
                recursiveReadOnly?: string
                /**
                 * @description Path within the volume from which the container's volume should be mounted.
                 *     Defaults to "" (volume's root).
                 */
                subPath?: string
                /**
                 * @description Expanded path within the volume from which the container's volume should be mounted.
                 *     Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
                 *     Defaults to "" (volume's root).
                 *     SubPathExpr and SubPath are mutually exclusive.
                 */
                subPathExpr?: string
              }[]
            }
            /** @description Patches are custom patches to apply to the NGINX DaemonSet. */
            patches?: {
              /**
               * @description Type is the type of patch. Defaults to StrategicMerge.
               * @default StrategicMerge
               * @enum {string}
               */
              type: "StrategicMerge" | "Merge" | "JSONPatch"
              /**
               * @description Value is the patch data as raw JSON.
               *     For StrategicMerge and Merge patches, this should be a JSON object.
               *     For JSONPatch patches, this should be a JSON array of patch operations.
               */
              value?: unknown
            }[]
            /** @description Pod defines Pod-specific fields. */
            pod?: {
              /** @description Affinity is the pod's scheduling constraints. */
              affinity?: {
                /** @description Describes node affinity scheduling rules for the pod. */
                nodeAffinity?: {
                  /**
                   * @description The scheduler will prefer to schedule pods to nodes that satisfy
                   *     the affinity expressions specified by this field, but it may choose
                   *     a node that violates one or more of the expressions. The node that is
                   *     most preferred is the one with the greatest sum of weights, i.e.
                   *     for each node that meets all of the scheduling requirements (resource
                   *     request, requiredDuringScheduling affinity expressions, etc.),
                   *     compute a sum by iterating through the elements of this field and adding
                   *     "weight" to the sum if the node matches the corresponding matchExpressions; the
                   *     node(s) with the highest sum are the most preferred.
                   */
                  preferredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description A node selector term, associated with the corresponding weight. */
                    preference: {
                      /** @description A list of node selector requirements by node's labels. */
                      matchExpressions?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                      /** @description A list of node selector requirements by node's fields. */
                      matchFields?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                    }
                    /**
                     * Format: int32
                     * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                     */
                    weight: number
                  }[]
                  /**
                   * @description If the affinity requirements specified by this field are not met at
                   *     scheduling time, the pod will not be scheduled onto the node.
                   *     If the affinity requirements specified by this field cease to be met
                   *     at some point during pod execution (e.g. due to an update), the system
                   *     may or may not try to eventually evict the pod from its node.
                   */
                  requiredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description Required. A list of node selector terms. The terms are ORed. */
                    nodeSelectorTerms: {
                      /** @description A list of node selector requirements by node's labels. */
                      matchExpressions?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                      /** @description A list of node selector requirements by node's fields. */
                      matchFields?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                    }[]
                  }
                }
                /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
                podAffinity?: {
                  /**
                   * @description The scheduler will prefer to schedule pods to nodes that satisfy
                   *     the affinity expressions specified by this field, but it may choose
                   *     a node that violates one or more of the expressions. The node that is
                   *     most preferred is the one with the greatest sum of weights, i.e.
                   *     for each node that meets all of the scheduling requirements (resource
                   *     request, requiredDuringScheduling affinity expressions, etc.),
                   *     compute a sum by iterating through the elements of this field and adding
                   *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                   *     node(s) with the highest sum are the most preferred.
                   */
                  preferredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description Required. A pod affinity term, associated with the corresponding weight. */
                    podAffinityTerm: {
                      /**
                       * @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods.
                       */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      matchLabelKeys?: string[]
                      /**
                       * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      mismatchLabelKeys?: string[]
                      /**
                       * @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces.
                       */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                       */
                      namespaces?: string[]
                      /**
                       * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed.
                       */
                      topologyKey: string
                    }
                    /**
                     * Format: int32
                     * @description weight associated with matching the corresponding podAffinityTerm,
                     *     in the range 1-100.
                     */
                    weight: number
                  }[]
                  /**
                   * @description If the affinity requirements specified by this field are not met at
                   *     scheduling time, the pod will not be scheduled onto the node.
                   *     If the affinity requirements specified by this field cease to be met
                   *     at some point during pod execution (e.g. due to a pod label update), the
                   *     system may or may not try to eventually evict the pod from its node.
                   *     When there are multiple elements, the lists of nodes corresponding to each
                   *     podAffinityTerm are intersected, i.e. all terms must be satisfied.
                   */
                  requiredDuringSchedulingIgnoredDuringExecution?: {
                    /**
                     * @description A label query over a set of resources, in this case pods.
                     *     If it's null, this PodAffinityTerm matches with no Pods.
                     */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description MatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    matchLabelKeys?: string[]
                    /**
                     * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    mismatchLabelKeys?: string[]
                    /**
                     * @description A label query over the set of namespaces that the term applies to.
                     *     The term is applied to the union of the namespaces selected by this field
                     *     and the ones listed in the namespaces field.
                     *     null selector and null or empty namespaces list means "this pod's namespace".
                     *     An empty selector ({}) matches all namespaces.
                     */
                    namespaceSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description namespaces specifies a static list of namespace names that the term applies to.
                     *     The term is applied to the union of the namespaces listed in this field
                     *     and the ones selected by namespaceSelector.
                     *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                     */
                    namespaces?: string[]
                    /**
                     * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     *     whose value of the label with key topologyKey matches that of any node on which any of the
                     *     selected pods is running.
                     *     Empty topologyKey is not allowed.
                     */
                    topologyKey: string
                  }[]
                }
                /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
                podAntiAffinity?: {
                  /**
                   * @description The scheduler will prefer to schedule pods to nodes that satisfy
                   *     the anti-affinity expressions specified by this field, but it may choose
                   *     a node that violates one or more of the expressions. The node that is
                   *     most preferred is the one with the greatest sum of weights, i.e.
                   *     for each node that meets all of the scheduling requirements (resource
                   *     request, requiredDuringScheduling anti-affinity expressions, etc.),
                   *     compute a sum by iterating through the elements of this field and subtracting
                   *     "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the
                   *     node(s) with the highest sum are the most preferred.
                   */
                  preferredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description Required. A pod affinity term, associated with the corresponding weight. */
                    podAffinityTerm: {
                      /**
                       * @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods.
                       */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      matchLabelKeys?: string[]
                      /**
                       * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      mismatchLabelKeys?: string[]
                      /**
                       * @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces.
                       */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                       */
                      namespaces?: string[]
                      /**
                       * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed.
                       */
                      topologyKey: string
                    }
                    /**
                     * Format: int32
                     * @description weight associated with matching the corresponding podAffinityTerm,
                     *     in the range 1-100.
                     */
                    weight: number
                  }[]
                  /**
                   * @description If the anti-affinity requirements specified by this field are not met at
                   *     scheduling time, the pod will not be scheduled onto the node.
                   *     If the anti-affinity requirements specified by this field cease to be met
                   *     at some point during pod execution (e.g. due to a pod label update), the
                   *     system may or may not try to eventually evict the pod from its node.
                   *     When there are multiple elements, the lists of nodes corresponding to each
                   *     podAffinityTerm are intersected, i.e. all terms must be satisfied.
                   */
                  requiredDuringSchedulingIgnoredDuringExecution?: {
                    /**
                     * @description A label query over a set of resources, in this case pods.
                     *     If it's null, this PodAffinityTerm matches with no Pods.
                     */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description MatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    matchLabelKeys?: string[]
                    /**
                     * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    mismatchLabelKeys?: string[]
                    /**
                     * @description A label query over the set of namespaces that the term applies to.
                     *     The term is applied to the union of the namespaces selected by this field
                     *     and the ones listed in the namespaces field.
                     *     null selector and null or empty namespaces list means "this pod's namespace".
                     *     An empty selector ({}) matches all namespaces.
                     */
                    namespaceSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description namespaces specifies a static list of namespace names that the term applies to.
                     *     The term is applied to the union of the namespaces listed in this field
                     *     and the ones selected by namespaceSelector.
                     *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                     */
                    namespaces?: string[]
                    /**
                     * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     *     whose value of the label with key topologyKey matches that of any node on which any of the
                     *     selected pods is running.
                     *     Empty topologyKey is not allowed.
                     */
                    topologyKey: string
                  }[]
                }
              }
              /**
               * @description NodeSelector is a selector which must be true for the pod to fit on a node.
               *     Selector which must match a node's labels for the pod to be scheduled on that node.
               */
              nodeSelector?: {
                [key: string]: string
              }
              /**
               * Format: int64
               * @description TerminationGracePeriodSeconds is the optional duration in seconds the pod needs to terminate gracefully.
               *     Value must be non-negative integer. The value zero indicates stop immediately via
               *     the kill signal (no opportunity to shut down).
               *     If this value is nil, the default grace period will be used instead.
               *     The grace period is the duration in seconds after the processes running in the pod are sent
               *     a termination signal and the time when the processes are forcibly halted with a kill signal.
               *     Set this value longer than the expected cleanup time for your process.
               *     Defaults to 30 seconds.
               */
              terminationGracePeriodSeconds?: number
              /** @description Tolerations allow the scheduler to schedule Pods with matching taints. */
              tolerations?: {
                /**
                 * @description Effect indicates the taint effect to match. Empty means match all taint effects.
                 *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                 */
                effect?: string
                /**
                 * @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
                 *     If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                 */
                key?: string
                /**
                 * @description Operator represents a key's relationship to the value.
                 *     Valid operators are Exists and Equal. Defaults to Equal.
                 *     Exists is equivalent to wildcard for value, so that a pod can
                 *     tolerate all taints of a particular category.
                 */
                operator?: string
                /**
                 * Format: int64
                 * @description TolerationSeconds represents the period of time the toleration (which must be
                 *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
                 *     it is not set, which means tolerate the taint forever (do not evict). Zero and
                 *     negative values will be treated as 0 (evict immediately) by the system.
                 */
                tolerationSeconds?: number
                /**
                 * @description Value is the taint value the toleration matches to.
                 *     If the operator is Exists, the value should be empty, otherwise just a regular string.
                 */
                value?: string
              }[]
              /**
               * @description TopologySpreadConstraints describes how a group of Pods ought to spread across topology
               *     domains. Scheduler will schedule Pods in a way which abides by the constraints.
               *     All topologySpreadConstraints are ANDed.
               */
              topologySpreadConstraints?: {
                /**
                 * @description LabelSelector is used to find matching pods.
                 *     Pods that match this label selector are counted to determine the number of pods
                 *     in their corresponding topology domain.
                 */
                labelSelector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string
                    /**
                     * @description operator represents a key's relationship to a set of values.
                     *     Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    operator: string
                    /**
                     * @description values is an array of string values. If the operator is In or NotIn,
                     *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                     *     the values array must be empty. This array is replaced during a strategic
                     *     merge patch.
                     */
                    values?: string[]
                  }[]
                  /**
                   * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                   *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                   *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  matchLabels?: {
                    [key: string]: string
                  }
                }
                /**
                 * @description MatchLabelKeys is a set of pod label keys to select the pods over which
                 *     spreading will be calculated. The keys are used to lookup values from the
                 *     incoming pod labels, those key-value labels are ANDed with labelSelector
                 *     to select the group of existing pods over which spreading will be calculated
                 *     for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector.
                 *     MatchLabelKeys cannot be set when LabelSelector isn't set.
                 *     Keys that don't exist in the incoming pod labels will
                 *     be ignored. A null or empty list means only match against labelSelector.
                 *
                 *     This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
                 */
                matchLabelKeys?: string[]
                /**
                 * Format: int32
                 * @description MaxSkew describes the degree to which pods may be unevenly distributed.
                 *     When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference
                 *     between the number of matching pods in the target topology and the global minimum.
                 *     The global minimum is the minimum number of matching pods in an eligible domain
                 *     or zero if the number of eligible domains is less than MinDomains.
                 *     For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
                 *     labelSelector spread as 2/2/1:
                 *     In this case, the global minimum is 1.
                 *     | zone1 | zone2 | zone3 |
                 *     |  P P  |  P P  |   P   |
                 *     - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2;
                 *     scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2)
                 *     violate MaxSkew(1).
                 *     - if MaxSkew is 2, incoming pod can be scheduled onto any zone.
                 *     When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence
                 *     to topologies that satisfy it.
                 *     It's a required field. Default value is 1 and 0 is not allowed.
                 */
                maxSkew: number
                /**
                 * Format: int32
                 * @description MinDomains indicates a minimum number of eligible domains.
                 *     When the number of eligible domains with matching topology keys is less than minDomains,
                 *     Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed.
                 *     And when the number of eligible domains with matching topology keys equals or greater than minDomains,
                 *     this value has no effect on scheduling.
                 *     As a result, when the number of eligible domains is less than minDomains,
                 *     scheduler won't schedule more than maxSkew Pods to those domains.
                 *     If value is nil, the constraint behaves as if MinDomains is equal to 1.
                 *     Valid values are integers greater than 0.
                 *     When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
                 *
                 *     For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same
                 *     labelSelector spread as 2/2/2:
                 *     | zone1 | zone2 | zone3 |
                 *     |  P P  |  P P  |  P P  |
                 *     The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0.
                 *     In this situation, new pod with the same labelSelector cannot be scheduled,
                 *     because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones,
                 *     it will violate MaxSkew.
                 */
                minDomains?: number
                /**
                 * @description NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector
                 *     when calculating pod topology spread skew. Options are:
                 *     - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations.
                 *     - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
                 *
                 *     If this value is nil, the behavior is equivalent to the Honor policy.
                 */
                nodeAffinityPolicy?: string
                /**
                 * @description NodeTaintsPolicy indicates how we will treat node taints when calculating
                 *     pod topology spread skew. Options are:
                 *     - Honor: nodes without taints, along with tainted nodes for which the incoming pod
                 *     has a toleration, are included.
                 *     - Ignore: node taints are ignored. All nodes are included.
                 *
                 *     If this value is nil, the behavior is equivalent to the Ignore policy.
                 */
                nodeTaintsPolicy?: string
                /**
                 * @description TopologyKey is the key of node labels. Nodes that have a label with this key
                 *     and identical values are considered to be in the same topology.
                 *     We consider each <key, value> as a "bucket", and try to put balanced number
                 *     of pods into each bucket.
                 *     We define a domain as a particular instance of a topology.
                 *     Also, we define an eligible domain as a domain whose nodes meet the requirements of
                 *     nodeAffinityPolicy and nodeTaintsPolicy.
                 *     e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology.
                 *     And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology.
                 *     It's a required field.
                 */
                topologyKey: string
                /**
                 * @description WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy
                 *     the spread constraint.
                 *     - DoNotSchedule (default) tells the scheduler not to schedule it.
                 *     - ScheduleAnyway tells the scheduler to schedule the pod in any location,
                 *       but giving higher precedence to topologies that would help reduce the
                 *       skew.
                 *     A constraint is considered "Unsatisfiable" for an incoming pod
                 *     if and only if every possible node assignment for that pod would violate
                 *     "MaxSkew" on some topology.
                 *     For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
                 *     labelSelector spread as 3/1/1:
                 *     | zone1 | zone2 | zone3 |
                 *     | P P P |   P   |   P   |
                 *     If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled
                 *     to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies
                 *     MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler
                 *     won't make it *more* imbalanced.
                 *     It's a required field.
                 */
                whenUnsatisfiable: string
              }[]
              /** @description Volumes represents named volumes in a pod that may be accessed by any container in the pod. */
              volumes?: {
                /**
                 * @description awsElasticBlockStore represents an AWS Disk resource that is attached to a
                 *     kubelet's host machine and then exposed to the pod.
                 *     Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree
                 *     awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                 */
                awsElasticBlockStore?: {
                  /**
                   * @description fsType is the filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                   */
                  fsType?: string
                  /**
                   * Format: int32
                   * @description partition is the partition in the volume that you want to mount.
                   *     If omitted, the default is to mount by volume name.
                   *     Examples: For volume /dev/sda1, you specify the partition as "1".
                   *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                   */
                  partition?: number
                  /**
                   * @description readOnly value true will force the readOnly setting in VolumeMounts.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                   */
                  readOnly?: boolean
                  /**
                   * @description volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume).
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                   */
                  volumeID: string
                }
                /**
                 * @description azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
                 *     Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type
                 *     are redirected to the disk.csi.azure.com CSI driver.
                 */
                azureDisk?: {
                  /** @description cachingMode is the Host Caching mode: None, Read Only, Read Write. */
                  cachingMode?: string
                  /** @description diskName is the Name of the data disk in the blob storage */
                  diskName: string
                  /** @description diskURI is the URI of data disk in the blob storage */
                  diskURI: string
                  /**
                   * @description fsType is Filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   * @default ext4
                   */
                  fsType: string
                  /** @description kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
                  kind?: string
                  /**
                   * @description readOnly Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   * @default false
                   */
                  readOnly: boolean
                }
                /**
                 * @description azureFile represents an Azure File Service mount on the host and bind mount to the pod.
                 *     Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type
                 *     are redirected to the file.csi.azure.com CSI driver.
                 */
                azureFile?: {
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /** @description secretName is the  name of secret that contains Azure Storage Account Name and Key */
                  secretName: string
                  /** @description shareName is the azure share Name */
                  shareName: string
                }
                /**
                 * @description cephFS represents a Ceph FS mount on the host that shares a pod's lifetime.
                 *     Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
                 */
                cephfs?: {
                  /**
                   * @description monitors is Required: Monitors is a collection of Ceph monitors
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  monitors: string[]
                  /** @description path is Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
                  path?: string
                  /**
                   * @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  readOnly?: boolean
                  /**
                   * @description secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  secretFile?: string
                  /**
                   * @description secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty.
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description user is optional: User is the rados user name, default is admin
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  user?: string
                }
                /**
                 * @description cinder represents a cinder volume attached and mounted on kubelets host machine.
                 *     Deprecated: Cinder is deprecated. All operations for the in-tree cinder type
                 *     are redirected to the cinder.csi.openstack.org CSI driver.
                 *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                 */
                cinder?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                   */
                  fsType?: string
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef is optional: points to a secret object containing parameters used to connect
                   *     to OpenStack.
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description volumeID used to identify the volume in cinder.
                   *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                   */
                  volumeID: string
                }
                /** @description configMap represents a configMap that should populate this volume */
                configMap?: {
                  /**
                   * Format: int32
                   * @description defaultMode is optional: mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     Defaults to 0644.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /**
                   * @description items if unspecified, each key-value pair in the Data field of the referenced
                   *     ConfigMap will be projected into the volume as a file whose name is the
                   *     key and content is the value. If specified, the listed keys will be
                   *     projected into the specified paths, and unlisted keys will not be
                   *     present. If a key is specified which is not present in the ConfigMap,
                   *     the volume setup will error unless it is marked optional. Paths must be
                   *     relative and may not contain the '..' path or start with '..'.
                   */
                  items?: {
                    /** @description key is the key to project. */
                    key: string
                    /**
                     * Format: int32
                     * @description mode is Optional: mode bits used to set permissions on this file.
                     *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     *     If not specified, the volume defaultMode will be used.
                     *     This might be in conflict with other options that affect the file
                     *     mode, like fsGroup, and the result can be other mode bits set.
                     */
                    mode?: number
                    /**
                     * @description path is the relative path of the file to map the key to.
                     *     May not be an absolute path.
                     *     May not contain the path element '..'.
                     *     May not start with the string '..'.
                     */
                    path: string
                  }[]
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string
                  /** @description optional specify whether the ConfigMap or its keys must be defined */
                  optional?: boolean
                }
                /** @description csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers. */
                csi?: {
                  /**
                   * @description driver is the name of the CSI driver that handles this volume.
                   *     Consult with your admin for the correct name as registered in the cluster.
                   */
                  driver: string
                  /**
                   * @description fsType to mount. Ex. "ext4", "xfs", "ntfs".
                   *     If not provided, the empty value is passed to the associated CSI driver
                   *     which will determine the default filesystem to apply.
                   */
                  fsType?: string
                  /**
                   * @description nodePublishSecretRef is a reference to the secret object containing
                   *     sensitive information to pass to the CSI driver to complete the CSI
                   *     NodePublishVolume and NodeUnpublishVolume calls.
                   *     This field is optional, and  may be empty if no secret is required. If the
                   *     secret object contains more than one secret, all secret references are passed.
                   */
                  nodePublishSecretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description readOnly specifies a read-only configuration for the volume.
                   *     Defaults to false (read/write).
                   */
                  readOnly?: boolean
                  /**
                   * @description volumeAttributes stores driver-specific properties that are passed to the CSI
                   *     driver. Consult your driver's documentation for supported values.
                   */
                  volumeAttributes?: {
                    [key: string]: string
                  }
                }
                /** @description downwardAPI represents downward API about the pod that should populate this volume */
                downwardAPI?: {
                  /**
                   * Format: int32
                   * @description Optional: mode bits to use on created files by default. Must be a
                   *     Optional: mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     Defaults to 0644.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /** @description Items is a list of downward API volume file */
                  items?: {
                    /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
                    fieldRef?: {
                      /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                      apiVersion?: string
                      /** @description Path of the field to select in the specified API version. */
                      fieldPath: string
                    }
                    /**
                     * Format: int32
                     * @description Optional: mode bits used to set permissions on this file, must be an octal value
                     *     between 0000 and 0777 or a decimal value between 0 and 511.
                     *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     *     If not specified, the volume defaultMode will be used.
                     *     This might be in conflict with other options that affect the file
                     *     mode, like fsGroup, and the result can be other mode bits set.
                     */
                    mode?: number
                    /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                    path: string
                    /**
                     * @description Selects a resource of the container: only resources limits and requests
                     *     (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                     */
                    resourceFieldRef?: {
                      /** @description Container name: required for volumes, optional for env vars */
                      containerName?: string
                      /** @description Specifies the output format of the exposed resources, defaults to "1" */
                      divisor?: number | string
                      /** @description Required: resource to select */
                      resource: string
                    }
                  }[]
                }
                /**
                 * @description emptyDir represents a temporary directory that shares a pod's lifetime.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                 */
                emptyDir?: {
                  /**
                   * @description medium represents what type of storage medium should back this directory.
                   *     The default is "" which means to use the node's default medium.
                   *     Must be an empty string (default) or Memory.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                   */
                  medium?: string
                  /**
                   * @description sizeLimit is the total amount of local storage required for this EmptyDir volume.
                   *     The size limit is also applicable for memory medium.
                   *     The maximum usage on memory medium EmptyDir would be the minimum value between
                   *     the SizeLimit specified here and the sum of memory limits of all containers in a pod.
                   *     The default is nil which means that the limit is undefined.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                   */
                  sizeLimit?: number | string
                }
                /**
                 * @description ephemeral represents a volume that is handled by a cluster storage driver.
                 *     The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts,
                 *     and deleted when the pod is removed.
                 *
                 *     Use this if:
                 *     a) the volume is only needed while the pod runs,
                 *     b) features of normal volumes like restoring from snapshot or capacity
                 *        tracking are needed,
                 *     c) the storage driver is specified through a storage class, and
                 *     d) the storage driver supports dynamic volume provisioning through
                 *        a PersistentVolumeClaim (see EphemeralVolumeSource for more
                 *        information on the connection between this volume type
                 *        and PersistentVolumeClaim).
                 *
                 *     Use PersistentVolumeClaim or one of the vendor-specific
                 *     APIs for volumes that persist for longer than the lifecycle
                 *     of an individual pod.
                 *
                 *     Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to
                 *     be used that way - see the documentation of the driver for
                 *     more information.
                 *
                 *     A pod can use both types of ephemeral volumes and
                 *     persistent volumes at the same time.
                 */
                ephemeral?: {
                  /**
                   * @description Will be used to create a stand-alone PVC to provision the volume.
                   *     The pod in which this EphemeralVolumeSource is embedded will be the
                   *     owner of the PVC, i.e. the PVC will be deleted together with the
                   *     pod.  The name of the PVC will be `<pod name>-<volume name>` where
                   *     `<volume name>` is the name from the `PodSpec.Volumes` array
                   *     entry. Pod validation will reject the pod if the concatenated name
                   *     is not valid for a PVC (for example, too long).
                   *
                   *     An existing PVC with that name that is not owned by the pod
                   *     will *not* be used for the pod to avoid using an unrelated
                   *     volume by mistake. Starting the pod is then blocked until
                   *     the unrelated PVC is removed. If such a pre-created PVC is
                   *     meant to be used by the pod, the PVC has to updated with an
                   *     owner reference to the pod once the pod exists. Normally
                   *     this should not be necessary, but it may be useful when
                   *     manually reconstructing a broken cluster.
                   *
                   *     This field is read-only and no changes will be made by Kubernetes
                   *     to the PVC after it has been created.
                   *
                   *     Required, must not be nil.
                   */
                  volumeClaimTemplate?: {
                    /**
                     * @description May contain labels and annotations that will be copied into the PVC
                     *     when creating it. No other fields are allowed and will be rejected during
                     *     validation.
                     */
                    metadata?: Record<string, never>
                    /**
                     * @description The specification for the PersistentVolumeClaim. The entire content is
                     *     copied unchanged into the PVC that gets created from this
                     *     template. The same fields as in a PersistentVolumeClaim
                     *     are also valid here.
                     */
                    spec: {
                      /**
                       * @description accessModes contains the desired access modes the volume should have.
                       *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                       */
                      accessModes?: string[]
                      /**
                       * @description dataSource field can be used to specify either:
                       *     * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                       *     * An existing PVC (PersistentVolumeClaim)
                       *     If the provisioner or an external controller can support the specified data source,
                       *     it will create a new volume based on the contents of the specified data source.
                       *     When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                       *     and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                       *     If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                       */
                      dataSource?: {
                        /**
                         * @description APIGroup is the group for the resource being referenced.
                         *     If APIGroup is not specified, the specified Kind must be in the core API group.
                         *     For any other third-party types, APIGroup is required.
                         */
                        apiGroup?: string
                        /** @description Kind is the type of resource being referenced */
                        kind: string
                        /** @description Name is the name of resource being referenced */
                        name: string
                      }
                      /**
                       * @description dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                       *     volume is desired. This may be any object from a non-empty API group (non
                       *     core object) or a PersistentVolumeClaim object.
                       *     When this field is specified, volume binding will only succeed if the type of
                       *     the specified object matches some installed volume populator or dynamic
                       *     provisioner.
                       *     This field will replace the functionality of the dataSource field and as such
                       *     if both fields are non-empty, they must have the same value. For backwards
                       *     compatibility, when namespace isn't specified in dataSourceRef,
                       *     both fields (dataSource and dataSourceRef) will be set to the same
                       *     value automatically if one of them is empty and the other is non-empty.
                       *     When namespace is specified in dataSourceRef,
                       *     dataSource isn't set to the same value and must be empty.
                       *     There are three important differences between dataSource and dataSourceRef:
                       *     * While dataSource only allows two specific types of objects, dataSourceRef
                       *       allows any non-core object, as well as PersistentVolumeClaim objects.
                       *     * While dataSource ignores disallowed values (dropping them), dataSourceRef
                       *       preserves all values, and generates an error if a disallowed value is
                       *       specified.
                       *     * While dataSource only allows local objects, dataSourceRef allows objects
                       *       in any namespaces.
                       *     (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                       *     (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                       */
                      dataSourceRef?: {
                        /**
                         * @description APIGroup is the group for the resource being referenced.
                         *     If APIGroup is not specified, the specified Kind must be in the core API group.
                         *     For any other third-party types, APIGroup is required.
                         */
                        apiGroup?: string
                        /** @description Kind is the type of resource being referenced */
                        kind: string
                        /** @description Name is the name of resource being referenced */
                        name: string
                        /**
                         * @description Namespace is the namespace of resource being referenced
                         *     Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                         *     (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                         */
                        namespace?: string
                      }
                      /**
                       * @description resources represents the minimum resources the volume should have.
                       *     If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                       *     that are lower than previous value but must still be higher than capacity recorded in the
                       *     status field of the claim.
                       *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                       */
                      resources?: {
                        /**
                         * @description Limits describes the maximum amount of compute resources allowed.
                         *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        limits?: {
                          [key: string]: number | string
                        }
                        /**
                         * @description Requests describes the minimum amount of compute resources required.
                         *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                         *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                         *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        requests?: {
                          [key: string]: number | string
                        }
                      }
                      /** @description selector is a label query over volumes to consider for binding. */
                      selector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description storageClassName is the name of the StorageClass required by the claim.
                       *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                       */
                      storageClassName?: string
                      /**
                       * @description volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                       *     If specified, the CSI driver will create or update the volume with the attributes defined
                       *     in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                       *     it can be changed after the claim is created. An empty string or nil value indicates that no
                       *     VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
                       *     this field can be reset to its previous value (including nil) to cancel the modification.
                       *     If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                       *     set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                       *     exists.
                       *     More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                       */
                      volumeAttributesClassName?: string
                      /**
                       * @description volumeMode defines what type of volume is required by the claim.
                       *     Value of Filesystem is implied when not included in claim spec.
                       */
                      volumeMode?: string
                      /** @description volumeName is the binding reference to the PersistentVolume backing this claim. */
                      volumeName?: string
                    }
                  }
                }
                /** @description fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
                fc?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /**
                   * Format: int32
                   * @description lun is Optional: FC target lun number
                   */
                  lun?: number
                  /**
                   * @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /** @description targetWWNs is Optional: FC target worldwide names (WWNs) */
                  targetWWNs?: string[]
                  /**
                   * @description wwids Optional: FC volume world wide identifiers (wwids)
                   *     Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
                   */
                  wwids?: string[]
                }
                /**
                 * @description flexVolume represents a generic volume resource that is
                 *     provisioned/attached using an exec based plugin.
                 *     Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
                 */
                flexVolume?: {
                  /** @description driver is the name of the driver to use for this volume. */
                  driver: string
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
                   */
                  fsType?: string
                  /** @description options is Optional: this field holds extra command options if any. */
                  options?: {
                    [key: string]: string
                  }
                  /**
                   * @description readOnly is Optional: defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef is Optional: secretRef is reference to the secret object containing
                   *     sensitive information to pass to the plugin scripts. This may be
                   *     empty if no secret object is specified. If the secret object
                   *     contains more than one secret, all secrets are passed to the plugin
                   *     scripts.
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                }
                /**
                 * @description flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running.
                 *     Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
                 */
                flocker?: {
                  /**
                   * @description datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker
                   *     should be considered as deprecated
                   */
                  datasetName?: string
                  /** @description datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset */
                  datasetUUID?: string
                }
                /**
                 * @description gcePersistentDisk represents a GCE Disk resource that is attached to a
                 *     kubelet's host machine and then exposed to the pod.
                 *     Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree
                 *     gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                 */
                gcePersistentDisk?: {
                  /**
                   * @description fsType is filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  fsType?: string
                  /**
                   * Format: int32
                   * @description partition is the partition in the volume that you want to mount.
                   *     If omitted, the default is to mount by volume name.
                   *     Examples: For volume /dev/sda1, you specify the partition as "1".
                   *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  partition?: number
                  /**
                   * @description pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  pdName: string
                  /**
                   * @description readOnly here will force the ReadOnly setting in VolumeMounts.
                   *     Defaults to false.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  readOnly?: boolean
                }
                /**
                 * @description gitRepo represents a git repository at a particular revision.
                 *     Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an
                 *     EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir
                 *     into the Pod's container.
                 */
                gitRepo?: {
                  /**
                   * @description directory is the target directory name.
                   *     Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the
                   *     git repository.  Otherwise, if specified, the volume will contain the git repository in
                   *     the subdirectory with the given name.
                   */
                  directory?: string
                  /** @description repository is the URL */
                  repository: string
                  /** @description revision is the commit hash for the specified revision. */
                  revision?: string
                }
                /**
                 * @description glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime.
                 *     Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported.
                 */
                glusterfs?: {
                  /** @description endpoints is the endpoint name that details Glusterfs topology. */
                  endpoints: string
                  /**
                   * @description path is the Glusterfs volume path.
                   *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                   */
                  path: string
                  /**
                   * @description readOnly here will force the Glusterfs volume to be mounted with read-only permissions.
                   *     Defaults to false.
                   *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                   */
                  readOnly?: boolean
                }
                /**
                 * @description hostPath represents a pre-existing file or directory on the host
                 *     machine that is directly exposed to the container. This is generally
                 *     used for system agents or other privileged things that are allowed
                 *     to see the host machine. Most containers will NOT need this.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                 */
                hostPath?: {
                  /**
                   * @description path of the directory on the host.
                   *     If the path is a symlink, it will follow the link to the real path.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                   */
                  path: string
                  /**
                   * @description type for HostPath Volume
                   *     Defaults to ""
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                   */
                  type?: string
                }
                /**
                 * @description image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine.
                 *     The volume is resolved at pod startup depending on which PullPolicy value is provided:
                 *
                 *     - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                 *     - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                 *     - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                 *
                 *     The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation.
                 *     A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message.
                 *     The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field.
                 *     The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images.
                 *     The volume will be mounted read-only (ro) and non-executable files (noexec).
                 *     Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath) before 1.33.
                 *     The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
                 */
                image?: {
                  /**
                   * @description Policy for pulling OCI objects. Possible values are:
                   *     Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                   *     Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                   *     IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                   *     Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
                   */
                  pullPolicy?: string
                  /**
                   * @description Required: Image or artifact reference to be used.
                   *     Behaves in the same way as pod.spec.containers[*].image.
                   *     Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets.
                   *     More info: https://kubernetes.io/docs/concepts/containers/images
                   *     This field is optional to allow higher level config management to default or override
                   *     container images in workload controllers like Deployments and StatefulSets.
                   */
                  reference?: string
                }
                /**
                 * @description iscsi represents an ISCSI Disk resource that is attached to a
                 *     kubelet's host machine and then exposed to the pod.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes/#iscsi
                 */
                iscsi?: {
                  /** @description chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication */
                  chapAuthDiscovery?: boolean
                  /** @description chapAuthSession defines whether support iSCSI Session CHAP authentication */
                  chapAuthSession?: boolean
                  /**
                   * @description fsType is the filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
                   */
                  fsType?: string
                  /**
                   * @description initiatorName is the custom iSCSI Initiator Name.
                   *     If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface
                   *     <target portal>:<volume name> will be created for the connection.
                   */
                  initiatorName?: string
                  /** @description iqn is the target iSCSI Qualified Name. */
                  iqn: string
                  /**
                   * @description iscsiInterface is the interface Name that uses an iSCSI transport.
                   *     Defaults to 'default' (tcp).
                   * @default default
                   */
                  iscsiInterface: string
                  /**
                   * Format: int32
                   * @description lun represents iSCSI Target Lun number.
                   */
                  lun: number
                  /**
                   * @description portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port
                   *     is other than default (typically TCP ports 860 and 3260).
                   */
                  portals?: string[]
                  /**
                   * @description readOnly here will force the ReadOnly setting in VolumeMounts.
                   *     Defaults to false.
                   */
                  readOnly?: boolean
                  /** @description secretRef is the CHAP Secret for iSCSI target and initiator authentication */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port
                   *     is other than default (typically TCP ports 860 and 3260).
                   */
                  targetPortal: string
                }
                /**
                 * @description name of the volume.
                 *     Must be a DNS_LABEL and unique within the pod.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                name: string
                /**
                 * @description nfs represents an NFS mount on the host that shares a pod's lifetime
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                 */
                nfs?: {
                  /**
                   * @description path that is exported by the NFS server.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                   */
                  path: string
                  /**
                   * @description readOnly here will force the NFS export to be mounted with read-only permissions.
                   *     Defaults to false.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                   */
                  readOnly?: boolean
                  /**
                   * @description server is the hostname or IP address of the NFS server.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                   */
                  server: string
                }
                /**
                 * @description persistentVolumeClaimVolumeSource represents a reference to a
                 *     PersistentVolumeClaim in the same namespace.
                 *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                persistentVolumeClaim?: {
                  /**
                   * @description claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                   *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                   */
                  claimName: string
                  /**
                   * @description readOnly Will force the ReadOnly setting in VolumeMounts.
                   *     Default false.
                   */
                  readOnly?: boolean
                }
                /**
                 * @description photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine.
                 *     Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
                 */
                photonPersistentDisk?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /** @description pdID is the ID that identifies Photon Controller persistent disk */
                  pdID: string
                }
                /**
                 * @description portworxVolume represents a portworx volume attached and mounted on kubelets host machine.
                 *     Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type
                 *     are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate
                 *     is on.
                 */
                portworxVolume?: {
                  /**
                   * @description fSType represents the filesystem type to mount
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /** @description volumeID uniquely identifies a Portworx volume */
                  volumeID: string
                }
                /** @description projected items for all in one resources secrets, configmaps, and downward API */
                projected?: {
                  /**
                   * Format: int32
                   * @description defaultMode are the mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /**
                   * @description sources is the list of volume projections. Each entry in this list
                   *     handles one source.
                   */
                  sources?: {
                    /**
                     * @description ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field
                     *     of ClusterTrustBundle objects in an auto-updating file.
                     *
                     *     Alpha, gated by the ClusterTrustBundleProjection feature gate.
                     *
                     *     ClusterTrustBundle objects can either be selected by name, or by the
                     *     combination of signer name and a label selector.
                     *
                     *     Kubelet performs aggressive normalization of the PEM contents written
                     *     into the pod filesystem.  Esoteric PEM features such as inter-block
                     *     comments and block headers are stripped.  Certificates are deduplicated.
                     *     The ordering of certificates within the file is arbitrary, and Kubelet
                     *     may change the order over time.
                     */
                    clusterTrustBundle?: {
                      /**
                       * @description Select all ClusterTrustBundles that match this label selector.  Only has
                       *     effect if signerName is set.  Mutually-exclusive with name.  If unset,
                       *     interpreted as "match nothing".  If set but empty, interpreted as "match
                       *     everything".
                       */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description Select a single ClusterTrustBundle by object name.  Mutually-exclusive
                       *     with signerName and labelSelector.
                       */
                      name?: string
                      /**
                       * @description If true, don't block pod startup if the referenced ClusterTrustBundle(s)
                       *     aren't available.  If using name, then the named ClusterTrustBundle is
                       *     allowed not to exist.  If using signerName, then the combination of
                       *     signerName and labelSelector is allowed to match zero
                       *     ClusterTrustBundles.
                       */
                      optional?: boolean
                      /** @description Relative path from the volume root to write the bundle. */
                      path: string
                      /**
                       * @description Select all ClusterTrustBundles that match this signer name.
                       *     Mutually-exclusive with name.  The contents of all selected
                       *     ClusterTrustBundles will be unified and deduplicated.
                       */
                      signerName?: string
                    }
                    /** @description configMap information about the configMap data to project */
                    configMap?: {
                      /**
                       * @description items if unspecified, each key-value pair in the Data field of the referenced
                       *     ConfigMap will be projected into the volume as a file whose name is the
                       *     key and content is the value. If specified, the listed keys will be
                       *     projected into the specified paths, and unlisted keys will not be
                       *     present. If a key is specified which is not present in the ConfigMap,
                       *     the volume setup will error unless it is marked optional. Paths must be
                       *     relative and may not contain the '..' path or start with '..'.
                       */
                      items?: {
                        /** @description key is the key to project. */
                        key: string
                        /**
                         * Format: int32
                         * @description mode is Optional: mode bits used to set permissions on this file.
                         *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         *     If not specified, the volume defaultMode will be used.
                         *     This might be in conflict with other options that affect the file
                         *     mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number
                        /**
                         * @description path is the relative path of the file to map the key to.
                         *     May not be an absolute path.
                         *     May not contain the path element '..'.
                         *     May not start with the string '..'.
                         */
                        path: string
                      }[]
                      /**
                       * @description Name of the referent.
                       *     This field is effectively required, but due to backwards compatibility is
                       *     allowed to be empty. Instances of this type with an empty value here are
                       *     almost certainly wrong.
                       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                       * @default
                       */
                      name: string
                      /** @description optional specify whether the ConfigMap or its keys must be defined */
                      optional?: boolean
                    }
                    /** @description downwardAPI information about the downwardAPI data to project */
                    downwardAPI?: {
                      /** @description Items is a list of DownwardAPIVolume file */
                      items?: {
                        /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
                        fieldRef?: {
                          /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                          apiVersion?: string
                          /** @description Path of the field to select in the specified API version. */
                          fieldPath: string
                        }
                        /**
                         * Format: int32
                         * @description Optional: mode bits used to set permissions on this file, must be an octal value
                         *     between 0000 and 0777 or a decimal value between 0 and 511.
                         *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         *     If not specified, the volume defaultMode will be used.
                         *     This might be in conflict with other options that affect the file
                         *     mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number
                        /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                        path: string
                        /**
                         * @description Selects a resource of the container: only resources limits and requests
                         *     (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                         */
                        resourceFieldRef?: {
                          /** @description Container name: required for volumes, optional for env vars */
                          containerName?: string
                          /** @description Specifies the output format of the exposed resources, defaults to "1" */
                          divisor?: number | string
                          /** @description Required: resource to select */
                          resource: string
                        }
                      }[]
                    }
                    /**
                     * @description Projects an auto-rotating credential bundle (private key and certificate
                     *     chain) that the pod can use either as a TLS client or server.
                     *
                     *     Kubelet generates a private key and uses it to send a
                     *     PodCertificateRequest to the named signer.  Once the signer approves the
                     *     request and issues a certificate chain, Kubelet writes the key and
                     *     certificate chain to the pod filesystem.  The pod does not start until
                     *     certificates have been issued for each podCertificate projected volume
                     *     source in its spec.
                     *
                     *     Kubelet will begin trying to rotate the certificate at the time indicated
                     *     by the signer using the PodCertificateRequest.Status.BeginRefreshAt
                     *     timestamp.
                     *
                     *     Kubelet can write a single file, indicated by the credentialBundlePath
                     *     field, or separate files, indicated by the keyPath and
                     *     certificateChainPath fields.
                     *
                     *     The credential bundle is a single file in PEM format.  The first PEM
                     *     entry is the private key (in PKCS#8 format), and the remaining PEM
                     *     entries are the certificate chain issued by the signer (typically,
                     *     signers will return their certificate chain in leaf-to-root order).
                     *
                     *     Prefer using the credential bundle format, since your application code
                     *     can read it atomically.  If you use keyPath and certificateChainPath,
                     *     your application must make two separate file reads. If these coincide
                     *     with a certificate rotation, it is possible that the private key and leaf
                     *     certificate you read may not correspond to each other.  Your application
                     *     will need to check for this condition, and re-read until they are
                     *     consistent.
                     *
                     *     The named signer controls chooses the format of the certificate it
                     *     issues; consult the signer implementation's documentation to learn how to
                     *     use the certificates it issues.
                     */
                    podCertificate?: {
                      /**
                       * @description Write the certificate chain at this path in the projected volume.
                       *
                       *     Most applications should use credentialBundlePath.  When using keyPath
                       *     and certificateChainPath, your application needs to check that the key
                       *     and leaf certificate are consistent, because it is possible to read the
                       *     files mid-rotation.
                       */
                      certificateChainPath?: string
                      /**
                       * @description Write the credential bundle at this path in the projected volume.
                       *
                       *     The credential bundle is a single file that contains multiple PEM blocks.
                       *     The first PEM block is a PRIVATE KEY block, containing a PKCS#8 private
                       *     key.
                       *
                       *     The remaining blocks are CERTIFICATE blocks, containing the issued
                       *     certificate chain from the signer (leaf and any intermediates).
                       *
                       *     Using credentialBundlePath lets your Pod's application code make a single
                       *     atomic read that retrieves a consistent key and certificate chain.  If you
                       *     project them to separate files, your application code will need to
                       *     additionally check that the leaf certificate was issued to the key.
                       */
                      credentialBundlePath?: string
                      /**
                       * @description Write the key at this path in the projected volume.
                       *
                       *     Most applications should use credentialBundlePath.  When using keyPath
                       *     and certificateChainPath, your application needs to check that the key
                       *     and leaf certificate are consistent, because it is possible to read the
                       *     files mid-rotation.
                       */
                      keyPath?: string
                      /**
                       * @description The type of keypair Kubelet will generate for the pod.
                       *
                       *     Valid values are "RSA3072", "RSA4096", "ECDSAP256", "ECDSAP384",
                       *     "ECDSAP521", and "ED25519".
                       */
                      keyType: string
                      /**
                       * Format: int32
                       * @description maxExpirationSeconds is the maximum lifetime permitted for the
                       *     certificate.
                       *
                       *     Kubelet copies this value verbatim into the PodCertificateRequests it
                       *     generates for this projection.
                       *
                       *     If omitted, kube-apiserver will set it to 86400(24 hours). kube-apiserver
                       *     will reject values shorter than 3600 (1 hour).  The maximum allowable
                       *     value is 7862400 (91 days).
                       *
                       *     The signer implementation is then free to issue a certificate with any
                       *     lifetime *shorter* than MaxExpirationSeconds, but no shorter than 3600
                       *     seconds (1 hour).  This constraint is enforced by kube-apiserver.
                       *     `kubernetes.io` signers will never issue certificates with a lifetime
                       *     longer than 24 hours.
                       */
                      maxExpirationSeconds?: number
                      /** @description Kubelet's generated CSRs will be addressed to this signer. */
                      signerName: string
                    }
                    /** @description secret information about the secret data to project */
                    secret?: {
                      /**
                       * @description items if unspecified, each key-value pair in the Data field of the referenced
                       *     Secret will be projected into the volume as a file whose name is the
                       *     key and content is the value. If specified, the listed keys will be
                       *     projected into the specified paths, and unlisted keys will not be
                       *     present. If a key is specified which is not present in the Secret,
                       *     the volume setup will error unless it is marked optional. Paths must be
                       *     relative and may not contain the '..' path or start with '..'.
                       */
                      items?: {
                        /** @description key is the key to project. */
                        key: string
                        /**
                         * Format: int32
                         * @description mode is Optional: mode bits used to set permissions on this file.
                         *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         *     If not specified, the volume defaultMode will be used.
                         *     This might be in conflict with other options that affect the file
                         *     mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number
                        /**
                         * @description path is the relative path of the file to map the key to.
                         *     May not be an absolute path.
                         *     May not contain the path element '..'.
                         *     May not start with the string '..'.
                         */
                        path: string
                      }[]
                      /**
                       * @description Name of the referent.
                       *     This field is effectively required, but due to backwards compatibility is
                       *     allowed to be empty. Instances of this type with an empty value here are
                       *     almost certainly wrong.
                       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                       * @default
                       */
                      name: string
                      /** @description optional field specify whether the Secret or its key must be defined */
                      optional?: boolean
                    }
                    /** @description serviceAccountToken is information about the serviceAccountToken data to project */
                    serviceAccountToken?: {
                      /**
                       * @description audience is the intended audience of the token. A recipient of a token
                       *     must identify itself with an identifier specified in the audience of the
                       *     token, and otherwise should reject the token. The audience defaults to the
                       *     identifier of the apiserver.
                       */
                      audience?: string
                      /**
                       * Format: int64
                       * @description expirationSeconds is the requested duration of validity of the service
                       *     account token. As the token approaches expiration, the kubelet volume
                       *     plugin will proactively rotate the service account token. The kubelet will
                       *     start trying to rotate the token if the token is older than 80 percent of
                       *     its time to live or if the token is older than 24 hours.Defaults to 1 hour
                       *     and must be at least 10 minutes.
                       */
                      expirationSeconds?: number
                      /**
                       * @description path is the path relative to the mount point of the file to project the
                       *     token into.
                       */
                      path: string
                    }
                  }[]
                }
                /**
                 * @description quobyte represents a Quobyte mount on the host that shares a pod's lifetime.
                 *     Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
                 */
                quobyte?: {
                  /**
                   * @description group to map volume access to
                   *     Default is no group
                   */
                  group?: string
                  /**
                   * @description readOnly here will force the Quobyte volume to be mounted with read-only permissions.
                   *     Defaults to false.
                   */
                  readOnly?: boolean
                  /**
                   * @description registry represents a single or multiple Quobyte Registry services
                   *     specified as a string as host:port pair (multiple entries are separated with commas)
                   *     which acts as the central registry for volumes
                   */
                  registry: string
                  /**
                   * @description tenant owning the given Quobyte volume in the Backend
                   *     Used with dynamically provisioned Quobyte volumes, value is set by the plugin
                   */
                  tenant?: string
                  /**
                   * @description user to map volume access to
                   *     Defaults to serivceaccount user
                   */
                  user?: string
                  /** @description volume is a string that references an already created Quobyte volume by name. */
                  volume: string
                }
                /**
                 * @description rbd represents a Rados Block Device mount on the host that shares a pod's lifetime.
                 *     Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported.
                 */
                rbd?: {
                  /**
                   * @description fsType is the filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
                   */
                  fsType?: string
                  /**
                   * @description image is the rados image name.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  image: string
                  /**
                   * @description keyring is the path to key ring for RBDUser.
                   *     Default is /etc/ceph/keyring.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   * @default /etc/ceph/keyring
                   */
                  keyring: string
                  /**
                   * @description monitors is a collection of Ceph monitors.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  monitors: string[]
                  /**
                   * @description pool is the rados pool name.
                   *     Default is rbd.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   * @default rbd
                   */
                  pool: string
                  /**
                   * @description readOnly here will force the ReadOnly setting in VolumeMounts.
                   *     Defaults to false.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef is name of the authentication secret for RBDUser. If provided
                   *     overrides keyring.
                   *     Default is nil.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description user is the rados user name.
                   *     Default is admin.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   * @default admin
                   */
                  user: string
                }
                /**
                 * @description scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
                 *     Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
                 */
                scaleIO?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs".
                   *     Default is "xfs".
                   * @default xfs
                   */
                  fsType: string
                  /** @description gateway is the host address of the ScaleIO API Gateway. */
                  gateway: string
                  /** @description protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. */
                  protectionDomain?: string
                  /**
                   * @description readOnly Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef references to the secret for ScaleIO user and other
                   *     sensitive information. If this is not provided, Login operation will fail.
                   */
                  secretRef: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /** @description sslEnabled Flag enable/disable SSL communication with Gateway, default false */
                  sslEnabled?: boolean
                  /**
                   * @description storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned.
                   *     Default is ThinProvisioned.
                   * @default ThinProvisioned
                   */
                  storageMode: string
                  /** @description storagePool is the ScaleIO Storage Pool associated with the protection domain. */
                  storagePool?: string
                  /** @description system is the name of the storage system as configured in ScaleIO. */
                  system: string
                  /**
                   * @description volumeName is the name of a volume already created in the ScaleIO system
                   *     that is associated with this volume source.
                   */
                  volumeName?: string
                }
                /**
                 * @description secret represents a secret that should populate this volume.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                 */
                secret?: {
                  /**
                   * Format: int32
                   * @description defaultMode is Optional: mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values
                   *     for mode bits. Defaults to 0644.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /**
                   * @description items If unspecified, each key-value pair in the Data field of the referenced
                   *     Secret will be projected into the volume as a file whose name is the
                   *     key and content is the value. If specified, the listed keys will be
                   *     projected into the specified paths, and unlisted keys will not be
                   *     present. If a key is specified which is not present in the Secret,
                   *     the volume setup will error unless it is marked optional. Paths must be
                   *     relative and may not contain the '..' path or start with '..'.
                   */
                  items?: {
                    /** @description key is the key to project. */
                    key: string
                    /**
                     * Format: int32
                     * @description mode is Optional: mode bits used to set permissions on this file.
                     *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     *     If not specified, the volume defaultMode will be used.
                     *     This might be in conflict with other options that affect the file
                     *     mode, like fsGroup, and the result can be other mode bits set.
                     */
                    mode?: number
                    /**
                     * @description path is the relative path of the file to map the key to.
                     *     May not be an absolute path.
                     *     May not contain the path element '..'.
                     *     May not start with the string '..'.
                     */
                    path: string
                  }[]
                  /** @description optional field specify whether the Secret or its keys must be defined */
                  optional?: boolean
                  /**
                   * @description secretName is the name of the secret in the pod's namespace to use.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                   */
                  secretName?: string
                }
                /**
                 * @description storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
                 *     Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported.
                 */
                storageos?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef specifies the secret to use for obtaining the StorageOS API
                   *     credentials.  If not specified, default values will be attempted.
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description volumeName is the human-readable name of the StorageOS volume.  Volume
                   *     names are only unique within a namespace.
                   */
                  volumeName?: string
                  /**
                   * @description volumeNamespace specifies the scope of the volume within StorageOS.  If no
                   *     namespace is specified then the Pod's namespace will be used.  This allows the
                   *     Kubernetes name scoping to be mirrored within StorageOS for tighter integration.
                   *     Set VolumeName to any name to override the default behaviour.
                   *     Set to "default" if you are not using namespaces within StorageOS.
                   *     Namespaces that do not pre-exist within StorageOS will be created.
                   */
                  volumeNamespace?: string
                }
                /**
                 * @description vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine.
                 *     Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type
                 *     are redirected to the csi.vsphere.vmware.com CSI driver.
                 */
                vsphereVolume?: {
                  /**
                   * @description fsType is filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /** @description storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
                  storagePolicyID?: string
                  /** @description storagePolicyName is the storage Policy Based Management (SPBM) profile name. */
                  storagePolicyName?: string
                  /** @description volumePath is the path that identifies vSphere volume vmdk */
                  volumePath: string
                }
              }[]
            }
          }
          /**
           * @description Deployment is the configuration for the NGINX Deployment.
           *     This is the default deployment option.
           */
          deployment?: {
            /** @description Autoscaling defines the configuration for Horizontal Pod Autoscaling. */
            autoscaling?: {
              /**
               * @description Behavior configures the scaling behavior of the target
               *     in both Up and Down directions (scaleUp and scaleDown fields respectively).
               *     If not set, the default HPAScalingRules for scale up and scale down are used.
               */
              behavior?: {
                /**
                 * @description scaleDown is scaling policy for scaling Down.
                 *     If not set, the default value is to allow to scale down to minReplicas pods, with a
                 *     300 second stabilization window (i.e., the highest recommendation for
                 *     the last 300sec is used).
                 */
                scaleDown?: {
                  /**
                   * @description policies is a list of potential scaling polices which can be used during scaling.
                   *     If not set, use the default values:
                   *     - For scale up: allow doubling the number of pods, or an absolute change of 4 pods in a 15s window.
                   *     - For scale down: allow all pods to be removed in a 15s window.
                   */
                  policies?: {
                    /**
                     * Format: int32
                     * @description periodSeconds specifies the window of time for which the policy should hold true.
                     *     PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
                     */
                    periodSeconds: number
                    /** @description type is used to specify the scaling policy. */
                    type: string
                    /**
                     * Format: int32
                     * @description value contains the amount of change which is permitted by the policy.
                     *     It must be greater than zero
                     */
                    value: number
                  }[]
                  /**
                   * @description selectPolicy is used to specify which policy should be used.
                   *     If not set, the default value Max is used.
                   */
                  selectPolicy?: string
                  /**
                   * Format: int32
                   * @description stabilizationWindowSeconds is the number of seconds for which past recommendations should be
                   *     considered while scaling up or scaling down.
                   *     StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour).
                   *     If not set, use the default values:
                   *     - For scale up: 0 (i.e. no stabilization is done).
                   *     - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
                   */
                  stabilizationWindowSeconds?: number
                  /**
                   * @description tolerance is the tolerance on the ratio between the current and desired
                   *     metric value under which no updates are made to the desired number of
                   *     replicas (e.g. 0.01 for 1%). Must be greater than or equal to zero. If not
                   *     set, the default cluster-wide tolerance is applied (by default 10%).
                   *
                   *     For example, if autoscaling is configured with a memory consumption target of 100Mi,
                   *     and scale-down and scale-up tolerances of 5% and 1% respectively, scaling will be
                   *     triggered when the actual consumption falls below 95Mi or exceeds 101Mi.
                   *
                   *     This is an alpha field and requires enabling the HPAConfigurableTolerance
                   *     feature gate.
                   */
                  tolerance?: number | string
                }
                /**
                 * @description scaleUp is scaling policy for scaling Up.
                 *     If not set, the default value is the higher of:
                 *       * increase no more than 4 pods per 60 seconds
                 *       * double the number of pods per 60 seconds
                 *     No stabilization is used.
                 */
                scaleUp?: {
                  /**
                   * @description policies is a list of potential scaling polices which can be used during scaling.
                   *     If not set, use the default values:
                   *     - For scale up: allow doubling the number of pods, or an absolute change of 4 pods in a 15s window.
                   *     - For scale down: allow all pods to be removed in a 15s window.
                   */
                  policies?: {
                    /**
                     * Format: int32
                     * @description periodSeconds specifies the window of time for which the policy should hold true.
                     *     PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
                     */
                    periodSeconds: number
                    /** @description type is used to specify the scaling policy. */
                    type: string
                    /**
                     * Format: int32
                     * @description value contains the amount of change which is permitted by the policy.
                     *     It must be greater than zero
                     */
                    value: number
                  }[]
                  /**
                   * @description selectPolicy is used to specify which policy should be used.
                   *     If not set, the default value Max is used.
                   */
                  selectPolicy?: string
                  /**
                   * Format: int32
                   * @description stabilizationWindowSeconds is the number of seconds for which past recommendations should be
                   *     considered while scaling up or scaling down.
                   *     StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour).
                   *     If not set, use the default values:
                   *     - For scale up: 0 (i.e. no stabilization is done).
                   *     - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
                   */
                  stabilizationWindowSeconds?: number
                  /**
                   * @description tolerance is the tolerance on the ratio between the current and desired
                   *     metric value under which no updates are made to the desired number of
                   *     replicas (e.g. 0.01 for 1%). Must be greater than or equal to zero. If not
                   *     set, the default cluster-wide tolerance is applied (by default 10%).
                   *
                   *     For example, if autoscaling is configured with a memory consumption target of 100Mi,
                   *     and scale-down and scale-up tolerances of 5% and 1% respectively, scaling will be
                   *     triggered when the actual consumption falls below 95Mi or exceeds 101Mi.
                   *
                   *     This is an alpha field and requires enabling the HPAConfigurableTolerance
                   *     feature gate.
                   */
                  tolerance?: number | string
                }
              }
              /** @description Enable or disable Horizontal Pod Autoscaler. */
              enable: boolean
              /**
               * Format: int32
               * @description Maximum number of replicas.
               */
              maxReplicas: number
              /** @description Metrics configures additional metrics options. */
              metrics?: {
                /**
                 * @description containerResource refers to a resource metric (such as those specified in
                 *     requests and limits) known to Kubernetes describing a single container in
                 *     each pod of the current scale target (e.g. CPU or memory). Such metrics are
                 *     built in to Kubernetes, and have special scaling options on top of those
                 *     available to normal per-pod metrics using the "pods" source.
                 */
                containerResource?: {
                  /** @description container is the name of the container in the pods of the scaling target */
                  container: string
                  /** @description name is the name of the resource in question. */
                  name: string
                  /** @description target specifies the target value for the given metric */
                  target: {
                    /**
                     * Format: int32
                     * @description averageUtilization is the target value of the average of the
                     *     resource metric across all relevant pods, represented as a percentage of
                     *     the requested value of the resource for the pods.
                     *     Currently only valid for Resource metric source type
                     */
                    averageUtilization?: number
                    /**
                     * @description averageValue is the target value of the average of the
                     *     metric across all relevant pods (as a quantity)
                     */
                    averageValue?: number | string
                    /** @description type represents whether the metric type is Utilization, Value, or AverageValue */
                    type: string
                    /** @description value is the target value of the metric (as a quantity). */
                    value?: number | string
                  }
                }
                /**
                 * @description external refers to a global metric that is not associated
                 *     with any Kubernetes object. It allows autoscaling based on information
                 *     coming from components running outside of cluster
                 *     (for example length of queue in cloud messaging service, or
                 *     QPS from loadbalancer running outside of cluster).
                 */
                external?: {
                  /** @description metric identifies the target metric by name and selector */
                  metric: {
                    /** @description name is the name of the given metric */
                    name: string
                    /**
                     * @description selector is the string-encoded form of a standard kubernetes label selector for the given metric
                     *     When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping.
                     *     When unset, just the metricName will be used to gather metrics.
                     */
                    selector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                  }
                  /** @description target specifies the target value for the given metric */
                  target: {
                    /**
                     * Format: int32
                     * @description averageUtilization is the target value of the average of the
                     *     resource metric across all relevant pods, represented as a percentage of
                     *     the requested value of the resource for the pods.
                     *     Currently only valid for Resource metric source type
                     */
                    averageUtilization?: number
                    /**
                     * @description averageValue is the target value of the average of the
                     *     metric across all relevant pods (as a quantity)
                     */
                    averageValue?: number | string
                    /** @description type represents whether the metric type is Utilization, Value, or AverageValue */
                    type: string
                    /** @description value is the target value of the metric (as a quantity). */
                    value?: number | string
                  }
                }
                /**
                 * @description object refers to a metric describing a single kubernetes object
                 *     (for example, hits-per-second on an Ingress object).
                 */
                object?: {
                  /** @description describedObject specifies the descriptions of a object,such as kind,name apiVersion */
                  describedObject: {
                    /** @description apiVersion is the API version of the referent */
                    apiVersion?: string
                    /** @description kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
                    kind: string
                    /** @description name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
                    name: string
                  }
                  /** @description metric identifies the target metric by name and selector */
                  metric: {
                    /** @description name is the name of the given metric */
                    name: string
                    /**
                     * @description selector is the string-encoded form of a standard kubernetes label selector for the given metric
                     *     When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping.
                     *     When unset, just the metricName will be used to gather metrics.
                     */
                    selector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                  }
                  /** @description target specifies the target value for the given metric */
                  target: {
                    /**
                     * Format: int32
                     * @description averageUtilization is the target value of the average of the
                     *     resource metric across all relevant pods, represented as a percentage of
                     *     the requested value of the resource for the pods.
                     *     Currently only valid for Resource metric source type
                     */
                    averageUtilization?: number
                    /**
                     * @description averageValue is the target value of the average of the
                     *     metric across all relevant pods (as a quantity)
                     */
                    averageValue?: number | string
                    /** @description type represents whether the metric type is Utilization, Value, or AverageValue */
                    type: string
                    /** @description value is the target value of the metric (as a quantity). */
                    value?: number | string
                  }
                }
                /**
                 * @description pods refers to a metric describing each pod in the current scale target
                 *     (for example, transactions-processed-per-second).  The values will be
                 *     averaged together before being compared to the target value.
                 */
                pods?: {
                  /** @description metric identifies the target metric by name and selector */
                  metric: {
                    /** @description name is the name of the given metric */
                    name: string
                    /**
                     * @description selector is the string-encoded form of a standard kubernetes label selector for the given metric
                     *     When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping.
                     *     When unset, just the metricName will be used to gather metrics.
                     */
                    selector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                  }
                  /** @description target specifies the target value for the given metric */
                  target: {
                    /**
                     * Format: int32
                     * @description averageUtilization is the target value of the average of the
                     *     resource metric across all relevant pods, represented as a percentage of
                     *     the requested value of the resource for the pods.
                     *     Currently only valid for Resource metric source type
                     */
                    averageUtilization?: number
                    /**
                     * @description averageValue is the target value of the average of the
                     *     metric across all relevant pods (as a quantity)
                     */
                    averageValue?: number | string
                    /** @description type represents whether the metric type is Utilization, Value, or AverageValue */
                    type: string
                    /** @description value is the target value of the metric (as a quantity). */
                    value?: number | string
                  }
                }
                /**
                 * @description resource refers to a resource metric (such as those specified in
                 *     requests and limits) known to Kubernetes describing each pod in the
                 *     current scale target (e.g. CPU or memory). Such metrics are built in to
                 *     Kubernetes, and have special scaling options on top of those available
                 *     to normal per-pod metrics using the "pods" source.
                 */
                resource?: {
                  /** @description name is the name of the resource in question. */
                  name: string
                  /** @description target specifies the target value for the given metric */
                  target: {
                    /**
                     * Format: int32
                     * @description averageUtilization is the target value of the average of the
                     *     resource metric across all relevant pods, represented as a percentage of
                     *     the requested value of the resource for the pods.
                     *     Currently only valid for Resource metric source type
                     */
                    averageUtilization?: number
                    /**
                     * @description averageValue is the target value of the average of the
                     *     metric across all relevant pods (as a quantity)
                     */
                    averageValue?: number | string
                    /** @description type represents whether the metric type is Utilization, Value, or AverageValue */
                    type: string
                    /** @description value is the target value of the metric (as a quantity). */
                    value?: number | string
                  }
                }
                /**
                 * @description type is the type of metric source.  It should be one of "ContainerResource", "External",
                 *     "Object", "Pods" or "Resource", each mapping to a matching field in the object.
                 */
                type: string
              }[]
              /**
               * Format: int32
               * @description Minimum number of replicas.
               */
              minReplicas?: number
              /**
               * Format: int32
               * @description Target cpu utilization percentage of HPA.
               */
              targetCPUUtilizationPercentage?: number
              /**
               * Format: int32
               * @description Target memory utilization percentage of HPA.
               */
              targetMemoryUtilizationPercentage?: number
            }
            /** @description Container defines container fields for the NGINX container. */
            container?: {
              /** @description Debug enables debugging for NGINX by using the nginx-debug binary. */
              debug?: boolean
              /** @description HostPorts are the list of ports to expose on the host. */
              hostPorts?: {
                /**
                 * Format: int32
                 * @description ContainerPort is the port on the nginx container to map to the HostPort.
                 */
                containerPort: number
                /**
                 * Format: int32
                 * @description Port to expose on the host.
                 */
                port: number
              }[]
              /** @description Image is the NGINX image to use. */
              image?: {
                /**
                 * @description PullPolicy describes a policy for if/when to pull a container image.
                 * @default IfNotPresent
                 * @enum {string}
                 */
                pullPolicy: "Always" | "Never" | "IfNotPresent"
                /**
                 * @description Repository is the image path.
                 *     Default is ghcr.io/nginx/nginx-gateway-fabric/nginx.
                 */
                repository?: string
                /** @description Tag is the image tag to use. Default matches the tag of the control plane. */
                tag?: string
              }
              /**
               * @description Lifecycle describes actions that the management system should take in response to container lifecycle
               *     events. For the PostStart and PreStop lifecycle handlers, management of the container blocks
               *     until the action is complete, unless the container process fails, in which case the handler is aborted.
               */
              lifecycle?: {
                /**
                 * @description PostStart is called immediately after a container is created. If the handler fails,
                 *     the container is terminated and restarted according to its restart policy.
                 *     Other management of the container blocks until the hook completes.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
                 */
                postStart?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /**
                     * @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                     */
                    command?: string[]
                  }
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /**
                     * @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead.
                     */
                    host?: string
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /**
                       * @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header.
                       */
                      name: string
                      /** @description The header field value */
                      value: string
                    }[]
                    /** @description Path to access on the HTTP server. */
                    path?: string
                    /**
                     * @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                    /**
                     * @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP.
                     */
                    scheme?: string
                  }
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number
                  }
                  /**
                   * @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified.
                   */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string
                    /**
                     * @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                  }
                }
                /**
                 * @description PreStop is called immediately before a container is terminated due to an
                 *     API request or management event such as liveness/startup probe failure,
                 *     preemption, resource contention, etc. The handler is not called if the
                 *     container crashes or exits. The Pod's termination grace period countdown begins before the
                 *     PreStop hook is executed. Regardless of the outcome of the handler, the
                 *     container will eventually terminate within the Pod's termination grace
                 *     period (unless delayed by finalizers). Other management of the container blocks until the hook completes
                 *     or until the termination grace period is reached.
                 *     More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
                 */
                preStop?: {
                  /** @description Exec specifies a command to execute in the container. */
                  exec?: {
                    /**
                     * @description Command is the command line to execute inside the container, the working directory for the
                     *     command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
                     *     not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
                     *     a shell, you need to explicitly call out to that shell.
                     *     Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                     */
                    command?: string[]
                  }
                  /** @description HTTPGet specifies an HTTP GET request to perform. */
                  httpGet?: {
                    /**
                     * @description Host name to connect to, defaults to the pod IP. You probably want to set
                     *     "Host" in httpHeaders instead.
                     */
                    host?: string
                    /** @description Custom headers to set in the request. HTTP allows repeated headers. */
                    httpHeaders?: {
                      /**
                       * @description The header field name.
                       *     This will be canonicalized upon output, so case-variant names will be understood as the same header.
                       */
                      name: string
                      /** @description The header field value */
                      value: string
                    }[]
                    /** @description Path to access on the HTTP server. */
                    path?: string
                    /**
                     * @description Name or number of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                    /**
                     * @description Scheme to use for connecting to the host.
                     *     Defaults to HTTP.
                     */
                    scheme?: string
                  }
                  /** @description Sleep represents a duration that the container should sleep. */
                  sleep?: {
                    /**
                     * Format: int64
                     * @description Seconds is the number of seconds to sleep.
                     */
                    seconds: number
                  }
                  /**
                   * @description Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
                   *     for backward compatibility. There is no validation of this field and
                   *     lifecycle hooks will fail at runtime when it is specified.
                   */
                  tcpSocket?: {
                    /** @description Optional: Host name to connect to, defaults to the pod IP. */
                    host?: string
                    /**
                     * @description Number or name of the port to access on the container.
                     *     Number must be in the range 1 to 65535.
                     *     Name must be an IANA_SVC_NAME.
                     */
                    port: number | string
                  }
                }
                /**
                 * @description StopSignal defines which signal will be sent to a container when it is being stopped.
                 *     If not specified, the default is defined by the container runtime in use.
                 *     StopSignal can only be set for Pods with a non-empty .spec.os.name
                 */
                stopSignal?: string
              }
              /** @description ReadinessProbe defines the readiness probe for the NGINX container. */
              readinessProbe?: {
                /**
                 * Format: int32
                 * @description InitialDelaySeconds is the number of seconds after the container has
                 *     started before the readiness probe is initiated.
                 *     If not specified, the default is 3 seconds.
                 */
                initialDelaySeconds?: number
                /**
                 * Format: int32
                 * @description Port is the port on which the readiness endpoint is exposed.
                 *     If not specified, the default port is 8081.
                 */
                port?: number
              }
              /** @description Resources describes the compute resource requirements. */
              resources?: {
                /**
                 * @description Claims lists the names of resources, defined in spec.resourceClaims,
                 *     that are used by this container.
                 *
                 *     This field depends on the
                 *     DynamicResourceAllocation feature gate.
                 *
                 *     This field is immutable. It can only be set for containers.
                 */
                claims?: {
                  /**
                   * @description Name must match the name of one entry in pod.spec.resourceClaims of
                   *     the Pod where this field is used. It makes that resource available
                   *     inside a container.
                   */
                  name: string
                  /**
                   * @description Request is the name chosen for a request in the referenced claim.
                   *     If empty, everything from the claim is made available, otherwise
                   *     only the result of this request.
                   */
                  request?: string
                }[]
                /**
                 * @description Limits describes the maximum amount of compute resources allowed.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                limits?: {
                  [key: string]: number | string
                }
                /**
                 * @description Requests describes the minimum amount of compute resources required.
                 *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                 *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                 *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                requests?: {
                  [key: string]: number | string
                }
              }
              /** @description VolumeMounts describe the mounting of Volumes within a container. */
              volumeMounts?: {
                /**
                 * @description Path within the container at which the volume should be mounted.  Must
                 *     not contain ':'.
                 */
                mountPath: string
                /**
                 * @description mountPropagation determines how mounts are propagated from the host
                 *     to container and the other way around.
                 *     When not set, MountPropagationNone is used.
                 *     This field is beta in 1.10.
                 *     When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
                 *     (which defaults to None).
                 */
                mountPropagation?: string
                /** @description This must match the Name of a Volume. */
                name: string
                /**
                 * @description Mounted read-only if true, read-write otherwise (false or unspecified).
                 *     Defaults to false.
                 */
                readOnly?: boolean
                /**
                 * @description RecursiveReadOnly specifies whether read-only mounts should be handled
                 *     recursively.
                 *
                 *     If ReadOnly is false, this field has no meaning and must be unspecified.
                 *
                 *     If ReadOnly is true, and this field is set to Disabled, the mount is not made
                 *     recursively read-only.  If this field is set to IfPossible, the mount is made
                 *     recursively read-only, if it is supported by the container runtime.  If this
                 *     field is set to Enabled, the mount is made recursively read-only if it is
                 *     supported by the container runtime, otherwise the pod will not be started and
                 *     an error will be generated to indicate the reason.
                 *
                 *     If this field is set to IfPossible or Enabled, MountPropagation must be set to
                 *     None (or be unspecified, which defaults to None).
                 *
                 *     If this field is not specified, it is treated as an equivalent of Disabled.
                 */
                recursiveReadOnly?: string
                /**
                 * @description Path within the volume from which the container's volume should be mounted.
                 *     Defaults to "" (volume's root).
                 */
                subPath?: string
                /**
                 * @description Expanded path within the volume from which the container's volume should be mounted.
                 *     Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
                 *     Defaults to "" (volume's root).
                 *     SubPathExpr and SubPath are mutually exclusive.
                 */
                subPathExpr?: string
              }[]
            }
            /** @description Patches are custom patches to apply to the NGINX Deployment. */
            patches?: {
              /**
               * @description Type is the type of patch. Defaults to StrategicMerge.
               * @default StrategicMerge
               * @enum {string}
               */
              type: "StrategicMerge" | "Merge" | "JSONPatch"
              /**
               * @description Value is the patch data as raw JSON.
               *     For StrategicMerge and Merge patches, this should be a JSON object.
               *     For JSONPatch patches, this should be a JSON array of patch operations.
               */
              value?: unknown
            }[]
            /** @description Pod defines Pod-specific fields. */
            pod?: {
              /** @description Affinity is the pod's scheduling constraints. */
              affinity?: {
                /** @description Describes node affinity scheduling rules for the pod. */
                nodeAffinity?: {
                  /**
                   * @description The scheduler will prefer to schedule pods to nodes that satisfy
                   *     the affinity expressions specified by this field, but it may choose
                   *     a node that violates one or more of the expressions. The node that is
                   *     most preferred is the one with the greatest sum of weights, i.e.
                   *     for each node that meets all of the scheduling requirements (resource
                   *     request, requiredDuringScheduling affinity expressions, etc.),
                   *     compute a sum by iterating through the elements of this field and adding
                   *     "weight" to the sum if the node matches the corresponding matchExpressions; the
                   *     node(s) with the highest sum are the most preferred.
                   */
                  preferredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description A node selector term, associated with the corresponding weight. */
                    preference: {
                      /** @description A list of node selector requirements by node's labels. */
                      matchExpressions?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                      /** @description A list of node selector requirements by node's fields. */
                      matchFields?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                    }
                    /**
                     * Format: int32
                     * @description Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                     */
                    weight: number
                  }[]
                  /**
                   * @description If the affinity requirements specified by this field are not met at
                   *     scheduling time, the pod will not be scheduled onto the node.
                   *     If the affinity requirements specified by this field cease to be met
                   *     at some point during pod execution (e.g. due to an update), the system
                   *     may or may not try to eventually evict the pod from its node.
                   */
                  requiredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description Required. A list of node selector terms. The terms are ORed. */
                    nodeSelectorTerms: {
                      /** @description A list of node selector requirements by node's labels. */
                      matchExpressions?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                      /** @description A list of node selector requirements by node's fields. */
                      matchFields?: {
                        /** @description The label key that the selector applies to. */
                        key: string
                        /**
                         * @description Represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                         */
                        operator: string
                        /**
                         * @description An array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. If the operator is Gt or Lt, the values
                         *     array must have a single element, which will be interpreted as an integer.
                         *     This array is replaced during a strategic merge patch.
                         */
                        values?: string[]
                      }[]
                    }[]
                  }
                }
                /** @description Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
                podAffinity?: {
                  /**
                   * @description The scheduler will prefer to schedule pods to nodes that satisfy
                   *     the affinity expressions specified by this field, but it may choose
                   *     a node that violates one or more of the expressions. The node that is
                   *     most preferred is the one with the greatest sum of weights, i.e.
                   *     for each node that meets all of the scheduling requirements (resource
                   *     request, requiredDuringScheduling affinity expressions, etc.),
                   *     compute a sum by iterating through the elements of this field and adding
                   *     "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
                   *     node(s) with the highest sum are the most preferred.
                   */
                  preferredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description Required. A pod affinity term, associated with the corresponding weight. */
                    podAffinityTerm: {
                      /**
                       * @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods.
                       */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      matchLabelKeys?: string[]
                      /**
                       * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      mismatchLabelKeys?: string[]
                      /**
                       * @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces.
                       */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                       */
                      namespaces?: string[]
                      /**
                       * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed.
                       */
                      topologyKey: string
                    }
                    /**
                     * Format: int32
                     * @description weight associated with matching the corresponding podAffinityTerm,
                     *     in the range 1-100.
                     */
                    weight: number
                  }[]
                  /**
                   * @description If the affinity requirements specified by this field are not met at
                   *     scheduling time, the pod will not be scheduled onto the node.
                   *     If the affinity requirements specified by this field cease to be met
                   *     at some point during pod execution (e.g. due to a pod label update), the
                   *     system may or may not try to eventually evict the pod from its node.
                   *     When there are multiple elements, the lists of nodes corresponding to each
                   *     podAffinityTerm are intersected, i.e. all terms must be satisfied.
                   */
                  requiredDuringSchedulingIgnoredDuringExecution?: {
                    /**
                     * @description A label query over a set of resources, in this case pods.
                     *     If it's null, this PodAffinityTerm matches with no Pods.
                     */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description MatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    matchLabelKeys?: string[]
                    /**
                     * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    mismatchLabelKeys?: string[]
                    /**
                     * @description A label query over the set of namespaces that the term applies to.
                     *     The term is applied to the union of the namespaces selected by this field
                     *     and the ones listed in the namespaces field.
                     *     null selector and null or empty namespaces list means "this pod's namespace".
                     *     An empty selector ({}) matches all namespaces.
                     */
                    namespaceSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description namespaces specifies a static list of namespace names that the term applies to.
                     *     The term is applied to the union of the namespaces listed in this field
                     *     and the ones selected by namespaceSelector.
                     *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                     */
                    namespaces?: string[]
                    /**
                     * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     *     whose value of the label with key topologyKey matches that of any node on which any of the
                     *     selected pods is running.
                     *     Empty topologyKey is not allowed.
                     */
                    topologyKey: string
                  }[]
                }
                /** @description Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
                podAntiAffinity?: {
                  /**
                   * @description The scheduler will prefer to schedule pods to nodes that satisfy
                   *     the anti-affinity expressions specified by this field, but it may choose
                   *     a node that violates one or more of the expressions. The node that is
                   *     most preferred is the one with the greatest sum of weights, i.e.
                   *     for each node that meets all of the scheduling requirements (resource
                   *     request, requiredDuringScheduling anti-affinity expressions, etc.),
                   *     compute a sum by iterating through the elements of this field and subtracting
                   *     "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the
                   *     node(s) with the highest sum are the most preferred.
                   */
                  preferredDuringSchedulingIgnoredDuringExecution?: {
                    /** @description Required. A pod affinity term, associated with the corresponding weight. */
                    podAffinityTerm: {
                      /**
                       * @description A label query over a set of resources, in this case pods.
                       *     If it's null, this PodAffinityTerm matches with no Pods.
                       */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description MatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                       *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      matchLabelKeys?: string[]
                      /**
                       * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                       *     be taken into consideration. The keys are used to lookup values from the
                       *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                       *     to select the group of existing pods which pods will be taken into consideration
                       *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                       *     pod labels will be ignored. The default value is empty.
                       *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                       *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                       */
                      mismatchLabelKeys?: string[]
                      /**
                       * @description A label query over the set of namespaces that the term applies to.
                       *     The term is applied to the union of the namespaces selected by this field
                       *     and the ones listed in the namespaces field.
                       *     null selector and null or empty namespaces list means "this pod's namespace".
                       *     An empty selector ({}) matches all namespaces.
                       */
                      namespaceSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description namespaces specifies a static list of namespace names that the term applies to.
                       *     The term is applied to the union of the namespaces listed in this field
                       *     and the ones selected by namespaceSelector.
                       *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                       */
                      namespaces?: string[]
                      /**
                       * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                       *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                       *     whose value of the label with key topologyKey matches that of any node on which any of the
                       *     selected pods is running.
                       *     Empty topologyKey is not allowed.
                       */
                      topologyKey: string
                    }
                    /**
                     * Format: int32
                     * @description weight associated with matching the corresponding podAffinityTerm,
                     *     in the range 1-100.
                     */
                    weight: number
                  }[]
                  /**
                   * @description If the anti-affinity requirements specified by this field are not met at
                   *     scheduling time, the pod will not be scheduled onto the node.
                   *     If the anti-affinity requirements specified by this field cease to be met
                   *     at some point during pod execution (e.g. due to a pod label update), the
                   *     system may or may not try to eventually evict the pod from its node.
                   *     When there are multiple elements, the lists of nodes corresponding to each
                   *     podAffinityTerm are intersected, i.e. all terms must be satisfied.
                   */
                  requiredDuringSchedulingIgnoredDuringExecution?: {
                    /**
                     * @description A label query over a set of resources, in this case pods.
                     *     If it's null, this PodAffinityTerm matches with no Pods.
                     */
                    labelSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description MatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both matchLabelKeys and labelSelector.
                     *     Also, matchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    matchLabelKeys?: string[]
                    /**
                     * @description MismatchLabelKeys is a set of pod label keys to select which pods will
                     *     be taken into consideration. The keys are used to lookup values from the
                     *     incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
                     *     to select the group of existing pods which pods will be taken into consideration
                     *     for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
                     *     pod labels will be ignored. The default value is empty.
                     *     The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
                     *     Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
                     */
                    mismatchLabelKeys?: string[]
                    /**
                     * @description A label query over the set of namespaces that the term applies to.
                     *     The term is applied to the union of the namespaces selected by this field
                     *     and the ones listed in the namespaces field.
                     *     null selector and null or empty namespaces list means "this pod's namespace".
                     *     An empty selector ({}) matches all namespaces.
                     */
                    namespaceSelector?: {
                      /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                      matchExpressions?: {
                        /** @description key is the label key that the selector applies to. */
                        key: string
                        /**
                         * @description operator represents a key's relationship to a set of values.
                         *     Valid operators are In, NotIn, Exists and DoesNotExist.
                         */
                        operator: string
                        /**
                         * @description values is an array of string values. If the operator is In or NotIn,
                         *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                         *     the values array must be empty. This array is replaced during a strategic
                         *     merge patch.
                         */
                        values?: string[]
                      }[]
                      /**
                       * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                       *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                       *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                       */
                      matchLabels?: {
                        [key: string]: string
                      }
                    }
                    /**
                     * @description namespaces specifies a static list of namespace names that the term applies to.
                     *     The term is applied to the union of the namespaces listed in this field
                     *     and the ones selected by namespaceSelector.
                     *     null or empty namespaces list and null namespaceSelector means "this pod's namespace".
                     */
                    namespaces?: string[]
                    /**
                     * @description This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
                     *     the labelSelector in the specified namespaces, where co-located is defined as running on a node
                     *     whose value of the label with key topologyKey matches that of any node on which any of the
                     *     selected pods is running.
                     *     Empty topologyKey is not allowed.
                     */
                    topologyKey: string
                  }[]
                }
              }
              /**
               * @description NodeSelector is a selector which must be true for the pod to fit on a node.
               *     Selector which must match a node's labels for the pod to be scheduled on that node.
               */
              nodeSelector?: {
                [key: string]: string
              }
              /**
               * Format: int64
               * @description TerminationGracePeriodSeconds is the optional duration in seconds the pod needs to terminate gracefully.
               *     Value must be non-negative integer. The value zero indicates stop immediately via
               *     the kill signal (no opportunity to shut down).
               *     If this value is nil, the default grace period will be used instead.
               *     The grace period is the duration in seconds after the processes running in the pod are sent
               *     a termination signal and the time when the processes are forcibly halted with a kill signal.
               *     Set this value longer than the expected cleanup time for your process.
               *     Defaults to 30 seconds.
               */
              terminationGracePeriodSeconds?: number
              /** @description Tolerations allow the scheduler to schedule Pods with matching taints. */
              tolerations?: {
                /**
                 * @description Effect indicates the taint effect to match. Empty means match all taint effects.
                 *     When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                 */
                effect?: string
                /**
                 * @description Key is the taint key that the toleration applies to. Empty means match all taint keys.
                 *     If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                 */
                key?: string
                /**
                 * @description Operator represents a key's relationship to the value.
                 *     Valid operators are Exists and Equal. Defaults to Equal.
                 *     Exists is equivalent to wildcard for value, so that a pod can
                 *     tolerate all taints of a particular category.
                 */
                operator?: string
                /**
                 * Format: int64
                 * @description TolerationSeconds represents the period of time the toleration (which must be
                 *     of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
                 *     it is not set, which means tolerate the taint forever (do not evict). Zero and
                 *     negative values will be treated as 0 (evict immediately) by the system.
                 */
                tolerationSeconds?: number
                /**
                 * @description Value is the taint value the toleration matches to.
                 *     If the operator is Exists, the value should be empty, otherwise just a regular string.
                 */
                value?: string
              }[]
              /**
               * @description TopologySpreadConstraints describes how a group of Pods ought to spread across topology
               *     domains. Scheduler will schedule Pods in a way which abides by the constraints.
               *     All topologySpreadConstraints are ANDed.
               */
              topologySpreadConstraints?: {
                /**
                 * @description LabelSelector is used to find matching pods.
                 *     Pods that match this label selector are counted to determine the number of pods
                 *     in their corresponding topology domain.
                 */
                labelSelector?: {
                  /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                  matchExpressions?: {
                    /** @description key is the label key that the selector applies to. */
                    key: string
                    /**
                     * @description operator represents a key's relationship to a set of values.
                     *     Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    operator: string
                    /**
                     * @description values is an array of string values. If the operator is In or NotIn,
                     *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                     *     the values array must be empty. This array is replaced during a strategic
                     *     merge patch.
                     */
                    values?: string[]
                  }[]
                  /**
                   * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                   *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                   *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  matchLabels?: {
                    [key: string]: string
                  }
                }
                /**
                 * @description MatchLabelKeys is a set of pod label keys to select the pods over which
                 *     spreading will be calculated. The keys are used to lookup values from the
                 *     incoming pod labels, those key-value labels are ANDed with labelSelector
                 *     to select the group of existing pods over which spreading will be calculated
                 *     for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector.
                 *     MatchLabelKeys cannot be set when LabelSelector isn't set.
                 *     Keys that don't exist in the incoming pod labels will
                 *     be ignored. A null or empty list means only match against labelSelector.
                 *
                 *     This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
                 */
                matchLabelKeys?: string[]
                /**
                 * Format: int32
                 * @description MaxSkew describes the degree to which pods may be unevenly distributed.
                 *     When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference
                 *     between the number of matching pods in the target topology and the global minimum.
                 *     The global minimum is the minimum number of matching pods in an eligible domain
                 *     or zero if the number of eligible domains is less than MinDomains.
                 *     For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
                 *     labelSelector spread as 2/2/1:
                 *     In this case, the global minimum is 1.
                 *     | zone1 | zone2 | zone3 |
                 *     |  P P  |  P P  |   P   |
                 *     - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2;
                 *     scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2)
                 *     violate MaxSkew(1).
                 *     - if MaxSkew is 2, incoming pod can be scheduled onto any zone.
                 *     When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence
                 *     to topologies that satisfy it.
                 *     It's a required field. Default value is 1 and 0 is not allowed.
                 */
                maxSkew: number
                /**
                 * Format: int32
                 * @description MinDomains indicates a minimum number of eligible domains.
                 *     When the number of eligible domains with matching topology keys is less than minDomains,
                 *     Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed.
                 *     And when the number of eligible domains with matching topology keys equals or greater than minDomains,
                 *     this value has no effect on scheduling.
                 *     As a result, when the number of eligible domains is less than minDomains,
                 *     scheduler won't schedule more than maxSkew Pods to those domains.
                 *     If value is nil, the constraint behaves as if MinDomains is equal to 1.
                 *     Valid values are integers greater than 0.
                 *     When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
                 *
                 *     For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same
                 *     labelSelector spread as 2/2/2:
                 *     | zone1 | zone2 | zone3 |
                 *     |  P P  |  P P  |  P P  |
                 *     The number of domains is less than 5(MinDomains), so "global minimum" is treated as 0.
                 *     In this situation, new pod with the same labelSelector cannot be scheduled,
                 *     because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones,
                 *     it will violate MaxSkew.
                 */
                minDomains?: number
                /**
                 * @description NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector
                 *     when calculating pod topology spread skew. Options are:
                 *     - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations.
                 *     - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
                 *
                 *     If this value is nil, the behavior is equivalent to the Honor policy.
                 */
                nodeAffinityPolicy?: string
                /**
                 * @description NodeTaintsPolicy indicates how we will treat node taints when calculating
                 *     pod topology spread skew. Options are:
                 *     - Honor: nodes without taints, along with tainted nodes for which the incoming pod
                 *     has a toleration, are included.
                 *     - Ignore: node taints are ignored. All nodes are included.
                 *
                 *     If this value is nil, the behavior is equivalent to the Ignore policy.
                 */
                nodeTaintsPolicy?: string
                /**
                 * @description TopologyKey is the key of node labels. Nodes that have a label with this key
                 *     and identical values are considered to be in the same topology.
                 *     We consider each <key, value> as a "bucket", and try to put balanced number
                 *     of pods into each bucket.
                 *     We define a domain as a particular instance of a topology.
                 *     Also, we define an eligible domain as a domain whose nodes meet the requirements of
                 *     nodeAffinityPolicy and nodeTaintsPolicy.
                 *     e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology.
                 *     And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology.
                 *     It's a required field.
                 */
                topologyKey: string
                /**
                 * @description WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy
                 *     the spread constraint.
                 *     - DoNotSchedule (default) tells the scheduler not to schedule it.
                 *     - ScheduleAnyway tells the scheduler to schedule the pod in any location,
                 *       but giving higher precedence to topologies that would help reduce the
                 *       skew.
                 *     A constraint is considered "Unsatisfiable" for an incoming pod
                 *     if and only if every possible node assignment for that pod would violate
                 *     "MaxSkew" on some topology.
                 *     For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
                 *     labelSelector spread as 3/1/1:
                 *     | zone1 | zone2 | zone3 |
                 *     | P P P |   P   |   P   |
                 *     If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled
                 *     to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies
                 *     MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler
                 *     won't make it *more* imbalanced.
                 *     It's a required field.
                 */
                whenUnsatisfiable: string
              }[]
              /** @description Volumes represents named volumes in a pod that may be accessed by any container in the pod. */
              volumes?: {
                /**
                 * @description awsElasticBlockStore represents an AWS Disk resource that is attached to a
                 *     kubelet's host machine and then exposed to the pod.
                 *     Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree
                 *     awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                 */
                awsElasticBlockStore?: {
                  /**
                   * @description fsType is the filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                   */
                  fsType?: string
                  /**
                   * Format: int32
                   * @description partition is the partition in the volume that you want to mount.
                   *     If omitted, the default is to mount by volume name.
                   *     Examples: For volume /dev/sda1, you specify the partition as "1".
                   *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                   */
                  partition?: number
                  /**
                   * @description readOnly value true will force the readOnly setting in VolumeMounts.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                   */
                  readOnly?: boolean
                  /**
                   * @description volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume).
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                   */
                  volumeID: string
                }
                /**
                 * @description azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
                 *     Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type
                 *     are redirected to the disk.csi.azure.com CSI driver.
                 */
                azureDisk?: {
                  /** @description cachingMode is the Host Caching mode: None, Read Only, Read Write. */
                  cachingMode?: string
                  /** @description diskName is the Name of the data disk in the blob storage */
                  diskName: string
                  /** @description diskURI is the URI of data disk in the blob storage */
                  diskURI: string
                  /**
                   * @description fsType is Filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   * @default ext4
                   */
                  fsType: string
                  /** @description kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
                  kind?: string
                  /**
                   * @description readOnly Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   * @default false
                   */
                  readOnly: boolean
                }
                /**
                 * @description azureFile represents an Azure File Service mount on the host and bind mount to the pod.
                 *     Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type
                 *     are redirected to the file.csi.azure.com CSI driver.
                 */
                azureFile?: {
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /** @description secretName is the  name of secret that contains Azure Storage Account Name and Key */
                  secretName: string
                  /** @description shareName is the azure share Name */
                  shareName: string
                }
                /**
                 * @description cephFS represents a Ceph FS mount on the host that shares a pod's lifetime.
                 *     Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
                 */
                cephfs?: {
                  /**
                   * @description monitors is Required: Monitors is a collection of Ceph monitors
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  monitors: string[]
                  /** @description path is Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
                  path?: string
                  /**
                   * @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  readOnly?: boolean
                  /**
                   * @description secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  secretFile?: string
                  /**
                   * @description secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty.
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description user is optional: User is the rados user name, default is admin
                   *     More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                   */
                  user?: string
                }
                /**
                 * @description cinder represents a cinder volume attached and mounted on kubelets host machine.
                 *     Deprecated: Cinder is deprecated. All operations for the in-tree cinder type
                 *     are redirected to the cinder.csi.openstack.org CSI driver.
                 *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                 */
                cinder?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                   */
                  fsType?: string
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef is optional: points to a secret object containing parameters used to connect
                   *     to OpenStack.
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description volumeID used to identify the volume in cinder.
                   *     More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                   */
                  volumeID: string
                }
                /** @description configMap represents a configMap that should populate this volume */
                configMap?: {
                  /**
                   * Format: int32
                   * @description defaultMode is optional: mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     Defaults to 0644.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /**
                   * @description items if unspecified, each key-value pair in the Data field of the referenced
                   *     ConfigMap will be projected into the volume as a file whose name is the
                   *     key and content is the value. If specified, the listed keys will be
                   *     projected into the specified paths, and unlisted keys will not be
                   *     present. If a key is specified which is not present in the ConfigMap,
                   *     the volume setup will error unless it is marked optional. Paths must be
                   *     relative and may not contain the '..' path or start with '..'.
                   */
                  items?: {
                    /** @description key is the key to project. */
                    key: string
                    /**
                     * Format: int32
                     * @description mode is Optional: mode bits used to set permissions on this file.
                     *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     *     If not specified, the volume defaultMode will be used.
                     *     This might be in conflict with other options that affect the file
                     *     mode, like fsGroup, and the result can be other mode bits set.
                     */
                    mode?: number
                    /**
                     * @description path is the relative path of the file to map the key to.
                     *     May not be an absolute path.
                     *     May not contain the path element '..'.
                     *     May not start with the string '..'.
                     */
                    path: string
                  }[]
                  /**
                   * @description Name of the referent.
                   *     This field is effectively required, but due to backwards compatibility is
                   *     allowed to be empty. Instances of this type with an empty value here are
                   *     almost certainly wrong.
                   *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                   * @default
                   */
                  name: string
                  /** @description optional specify whether the ConfigMap or its keys must be defined */
                  optional?: boolean
                }
                /** @description csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers. */
                csi?: {
                  /**
                   * @description driver is the name of the CSI driver that handles this volume.
                   *     Consult with your admin for the correct name as registered in the cluster.
                   */
                  driver: string
                  /**
                   * @description fsType to mount. Ex. "ext4", "xfs", "ntfs".
                   *     If not provided, the empty value is passed to the associated CSI driver
                   *     which will determine the default filesystem to apply.
                   */
                  fsType?: string
                  /**
                   * @description nodePublishSecretRef is a reference to the secret object containing
                   *     sensitive information to pass to the CSI driver to complete the CSI
                   *     NodePublishVolume and NodeUnpublishVolume calls.
                   *     This field is optional, and  may be empty if no secret is required. If the
                   *     secret object contains more than one secret, all secret references are passed.
                   */
                  nodePublishSecretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description readOnly specifies a read-only configuration for the volume.
                   *     Defaults to false (read/write).
                   */
                  readOnly?: boolean
                  /**
                   * @description volumeAttributes stores driver-specific properties that are passed to the CSI
                   *     driver. Consult your driver's documentation for supported values.
                   */
                  volumeAttributes?: {
                    [key: string]: string
                  }
                }
                /** @description downwardAPI represents downward API about the pod that should populate this volume */
                downwardAPI?: {
                  /**
                   * Format: int32
                   * @description Optional: mode bits to use on created files by default. Must be a
                   *     Optional: mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     Defaults to 0644.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /** @description Items is a list of downward API volume file */
                  items?: {
                    /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
                    fieldRef?: {
                      /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                      apiVersion?: string
                      /** @description Path of the field to select in the specified API version. */
                      fieldPath: string
                    }
                    /**
                     * Format: int32
                     * @description Optional: mode bits used to set permissions on this file, must be an octal value
                     *     between 0000 and 0777 or a decimal value between 0 and 511.
                     *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     *     If not specified, the volume defaultMode will be used.
                     *     This might be in conflict with other options that affect the file
                     *     mode, like fsGroup, and the result can be other mode bits set.
                     */
                    mode?: number
                    /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                    path: string
                    /**
                     * @description Selects a resource of the container: only resources limits and requests
                     *     (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                     */
                    resourceFieldRef?: {
                      /** @description Container name: required for volumes, optional for env vars */
                      containerName?: string
                      /** @description Specifies the output format of the exposed resources, defaults to "1" */
                      divisor?: number | string
                      /** @description Required: resource to select */
                      resource: string
                    }
                  }[]
                }
                /**
                 * @description emptyDir represents a temporary directory that shares a pod's lifetime.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                 */
                emptyDir?: {
                  /**
                   * @description medium represents what type of storage medium should back this directory.
                   *     The default is "" which means to use the node's default medium.
                   *     Must be an empty string (default) or Memory.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                   */
                  medium?: string
                  /**
                   * @description sizeLimit is the total amount of local storage required for this EmptyDir volume.
                   *     The size limit is also applicable for memory medium.
                   *     The maximum usage on memory medium EmptyDir would be the minimum value between
                   *     the SizeLimit specified here and the sum of memory limits of all containers in a pod.
                   *     The default is nil which means that the limit is undefined.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                   */
                  sizeLimit?: number | string
                }
                /**
                 * @description ephemeral represents a volume that is handled by a cluster storage driver.
                 *     The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts,
                 *     and deleted when the pod is removed.
                 *
                 *     Use this if:
                 *     a) the volume is only needed while the pod runs,
                 *     b) features of normal volumes like restoring from snapshot or capacity
                 *        tracking are needed,
                 *     c) the storage driver is specified through a storage class, and
                 *     d) the storage driver supports dynamic volume provisioning through
                 *        a PersistentVolumeClaim (see EphemeralVolumeSource for more
                 *        information on the connection between this volume type
                 *        and PersistentVolumeClaim).
                 *
                 *     Use PersistentVolumeClaim or one of the vendor-specific
                 *     APIs for volumes that persist for longer than the lifecycle
                 *     of an individual pod.
                 *
                 *     Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to
                 *     be used that way - see the documentation of the driver for
                 *     more information.
                 *
                 *     A pod can use both types of ephemeral volumes and
                 *     persistent volumes at the same time.
                 */
                ephemeral?: {
                  /**
                   * @description Will be used to create a stand-alone PVC to provision the volume.
                   *     The pod in which this EphemeralVolumeSource is embedded will be the
                   *     owner of the PVC, i.e. the PVC will be deleted together with the
                   *     pod.  The name of the PVC will be `<pod name>-<volume name>` where
                   *     `<volume name>` is the name from the `PodSpec.Volumes` array
                   *     entry. Pod validation will reject the pod if the concatenated name
                   *     is not valid for a PVC (for example, too long).
                   *
                   *     An existing PVC with that name that is not owned by the pod
                   *     will *not* be used for the pod to avoid using an unrelated
                   *     volume by mistake. Starting the pod is then blocked until
                   *     the unrelated PVC is removed. If such a pre-created PVC is
                   *     meant to be used by the pod, the PVC has to updated with an
                   *     owner reference to the pod once the pod exists. Normally
                   *     this should not be necessary, but it may be useful when
                   *     manually reconstructing a broken cluster.
                   *
                   *     This field is read-only and no changes will be made by Kubernetes
                   *     to the PVC after it has been created.
                   *
                   *     Required, must not be nil.
                   */
                  volumeClaimTemplate?: {
                    /**
                     * @description May contain labels and annotations that will be copied into the PVC
                     *     when creating it. No other fields are allowed and will be rejected during
                     *     validation.
                     */
                    metadata?: Record<string, never>
                    /**
                     * @description The specification for the PersistentVolumeClaim. The entire content is
                     *     copied unchanged into the PVC that gets created from this
                     *     template. The same fields as in a PersistentVolumeClaim
                     *     are also valid here.
                     */
                    spec: {
                      /**
                       * @description accessModes contains the desired access modes the volume should have.
                       *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                       */
                      accessModes?: string[]
                      /**
                       * @description dataSource field can be used to specify either:
                       *     * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                       *     * An existing PVC (PersistentVolumeClaim)
                       *     If the provisioner or an external controller can support the specified data source,
                       *     it will create a new volume based on the contents of the specified data source.
                       *     When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                       *     and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                       *     If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                       */
                      dataSource?: {
                        /**
                         * @description APIGroup is the group for the resource being referenced.
                         *     If APIGroup is not specified, the specified Kind must be in the core API group.
                         *     For any other third-party types, APIGroup is required.
                         */
                        apiGroup?: string
                        /** @description Kind is the type of resource being referenced */
                        kind: string
                        /** @description Name is the name of resource being referenced */
                        name: string
                      }
                      /**
                       * @description dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                       *     volume is desired. This may be any object from a non-empty API group (non
                       *     core object) or a PersistentVolumeClaim object.
                       *     When this field is specified, volume binding will only succeed if the type of
                       *     the specified object matches some installed volume populator or dynamic
                       *     provisioner.
                       *     This field will replace the functionality of the dataSource field and as such
                       *     if both fields are non-empty, they must have the same value. For backwards
                       *     compatibility, when namespace isn't specified in dataSourceRef,
                       *     both fields (dataSource and dataSourceRef) will be set to the same
                       *     value automatically if one of them is empty and the other is non-empty.
                       *     When namespace is specified in dataSourceRef,
                       *     dataSource isn't set to the same value and must be empty.
                       *     There are three important differences between dataSource and dataSourceRef:
                       *     * While dataSource only allows two specific types of objects, dataSourceRef
                       *       allows any non-core object, as well as PersistentVolumeClaim objects.
                       *     * While dataSource ignores disallowed values (dropping them), dataSourceRef
                       *       preserves all values, and generates an error if a disallowed value is
                       *       specified.
                       *     * While dataSource only allows local objects, dataSourceRef allows objects
                       *       in any namespaces.
                       *     (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                       *     (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                       */
                      dataSourceRef?: {
                        /**
                         * @description APIGroup is the group for the resource being referenced.
                         *     If APIGroup is not specified, the specified Kind must be in the core API group.
                         *     For any other third-party types, APIGroup is required.
                         */
                        apiGroup?: string
                        /** @description Kind is the type of resource being referenced */
                        kind: string
                        /** @description Name is the name of resource being referenced */
                        name: string
                        /**
                         * @description Namespace is the namespace of resource being referenced
                         *     Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                         *     (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                         */
                        namespace?: string
                      }
                      /**
                       * @description resources represents the minimum resources the volume should have.
                       *     If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
                       *     that are lower than previous value but must still be higher than capacity recorded in the
                       *     status field of the claim.
                       *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                       */
                      resources?: {
                        /**
                         * @description Limits describes the maximum amount of compute resources allowed.
                         *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        limits?: {
                          [key: string]: number | string
                        }
                        /**
                         * @description Requests describes the minimum amount of compute resources required.
                         *     If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                         *     otherwise to an implementation-defined value. Requests cannot exceed Limits.
                         *     More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        requests?: {
                          [key: string]: number | string
                        }
                      }
                      /** @description selector is a label query over volumes to consider for binding. */
                      selector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description storageClassName is the name of the StorageClass required by the claim.
                       *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                       */
                      storageClassName?: string
                      /**
                       * @description volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                       *     If specified, the CSI driver will create or update the volume with the attributes defined
                       *     in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                       *     it can be changed after the claim is created. An empty string or nil value indicates that no
                       *     VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
                       *     this field can be reset to its previous value (including nil) to cancel the modification.
                       *     If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                       *     set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                       *     exists.
                       *     More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                       */
                      volumeAttributesClassName?: string
                      /**
                       * @description volumeMode defines what type of volume is required by the claim.
                       *     Value of Filesystem is implied when not included in claim spec.
                       */
                      volumeMode?: string
                      /** @description volumeName is the binding reference to the PersistentVolume backing this claim. */
                      volumeName?: string
                    }
                  }
                }
                /** @description fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
                fc?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /**
                   * Format: int32
                   * @description lun is Optional: FC target lun number
                   */
                  lun?: number
                  /**
                   * @description readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /** @description targetWWNs is Optional: FC target worldwide names (WWNs) */
                  targetWWNs?: string[]
                  /**
                   * @description wwids Optional: FC volume world wide identifiers (wwids)
                   *     Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
                   */
                  wwids?: string[]
                }
                /**
                 * @description flexVolume represents a generic volume resource that is
                 *     provisioned/attached using an exec based plugin.
                 *     Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
                 */
                flexVolume?: {
                  /** @description driver is the name of the driver to use for this volume. */
                  driver: string
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
                   */
                  fsType?: string
                  /** @description options is Optional: this field holds extra command options if any. */
                  options?: {
                    [key: string]: string
                  }
                  /**
                   * @description readOnly is Optional: defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef is Optional: secretRef is reference to the secret object containing
                   *     sensitive information to pass to the plugin scripts. This may be
                   *     empty if no secret object is specified. If the secret object
                   *     contains more than one secret, all secrets are passed to the plugin
                   *     scripts.
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                }
                /**
                 * @description flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running.
                 *     Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
                 */
                flocker?: {
                  /**
                   * @description datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker
                   *     should be considered as deprecated
                   */
                  datasetName?: string
                  /** @description datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset */
                  datasetUUID?: string
                }
                /**
                 * @description gcePersistentDisk represents a GCE Disk resource that is attached to a
                 *     kubelet's host machine and then exposed to the pod.
                 *     Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree
                 *     gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                 */
                gcePersistentDisk?: {
                  /**
                   * @description fsType is filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  fsType?: string
                  /**
                   * Format: int32
                   * @description partition is the partition in the volume that you want to mount.
                   *     If omitted, the default is to mount by volume name.
                   *     Examples: For volume /dev/sda1, you specify the partition as "1".
                   *     Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  partition?: number
                  /**
                   * @description pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  pdName: string
                  /**
                   * @description readOnly here will force the ReadOnly setting in VolumeMounts.
                   *     Defaults to false.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                   */
                  readOnly?: boolean
                }
                /**
                 * @description gitRepo represents a git repository at a particular revision.
                 *     Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an
                 *     EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir
                 *     into the Pod's container.
                 */
                gitRepo?: {
                  /**
                   * @description directory is the target directory name.
                   *     Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the
                   *     git repository.  Otherwise, if specified, the volume will contain the git repository in
                   *     the subdirectory with the given name.
                   */
                  directory?: string
                  /** @description repository is the URL */
                  repository: string
                  /** @description revision is the commit hash for the specified revision. */
                  revision?: string
                }
                /**
                 * @description glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime.
                 *     Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported.
                 */
                glusterfs?: {
                  /** @description endpoints is the endpoint name that details Glusterfs topology. */
                  endpoints: string
                  /**
                   * @description path is the Glusterfs volume path.
                   *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                   */
                  path: string
                  /**
                   * @description readOnly here will force the Glusterfs volume to be mounted with read-only permissions.
                   *     Defaults to false.
                   *     More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                   */
                  readOnly?: boolean
                }
                /**
                 * @description hostPath represents a pre-existing file or directory on the host
                 *     machine that is directly exposed to the container. This is generally
                 *     used for system agents or other privileged things that are allowed
                 *     to see the host machine. Most containers will NOT need this.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                 */
                hostPath?: {
                  /**
                   * @description path of the directory on the host.
                   *     If the path is a symlink, it will follow the link to the real path.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                   */
                  path: string
                  /**
                   * @description type for HostPath Volume
                   *     Defaults to ""
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                   */
                  type?: string
                }
                /**
                 * @description image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine.
                 *     The volume is resolved at pod startup depending on which PullPolicy value is provided:
                 *
                 *     - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                 *     - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                 *     - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                 *
                 *     The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation.
                 *     A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message.
                 *     The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field.
                 *     The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images.
                 *     The volume will be mounted read-only (ro) and non-executable files (noexec).
                 *     Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath) before 1.33.
                 *     The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
                 */
                image?: {
                  /**
                   * @description Policy for pulling OCI objects. Possible values are:
                   *     Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                   *     Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                   *     IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                   *     Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
                   */
                  pullPolicy?: string
                  /**
                   * @description Required: Image or artifact reference to be used.
                   *     Behaves in the same way as pod.spec.containers[*].image.
                   *     Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets.
                   *     More info: https://kubernetes.io/docs/concepts/containers/images
                   *     This field is optional to allow higher level config management to default or override
                   *     container images in workload controllers like Deployments and StatefulSets.
                   */
                  reference?: string
                }
                /**
                 * @description iscsi represents an ISCSI Disk resource that is attached to a
                 *     kubelet's host machine and then exposed to the pod.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes/#iscsi
                 */
                iscsi?: {
                  /** @description chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication */
                  chapAuthDiscovery?: boolean
                  /** @description chapAuthSession defines whether support iSCSI Session CHAP authentication */
                  chapAuthSession?: boolean
                  /**
                   * @description fsType is the filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
                   */
                  fsType?: string
                  /**
                   * @description initiatorName is the custom iSCSI Initiator Name.
                   *     If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface
                   *     <target portal>:<volume name> will be created for the connection.
                   */
                  initiatorName?: string
                  /** @description iqn is the target iSCSI Qualified Name. */
                  iqn: string
                  /**
                   * @description iscsiInterface is the interface Name that uses an iSCSI transport.
                   *     Defaults to 'default' (tcp).
                   * @default default
                   */
                  iscsiInterface: string
                  /**
                   * Format: int32
                   * @description lun represents iSCSI Target Lun number.
                   */
                  lun: number
                  /**
                   * @description portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port
                   *     is other than default (typically TCP ports 860 and 3260).
                   */
                  portals?: string[]
                  /**
                   * @description readOnly here will force the ReadOnly setting in VolumeMounts.
                   *     Defaults to false.
                   */
                  readOnly?: boolean
                  /** @description secretRef is the CHAP Secret for iSCSI target and initiator authentication */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port
                   *     is other than default (typically TCP ports 860 and 3260).
                   */
                  targetPortal: string
                }
                /**
                 * @description name of the volume.
                 *     Must be a DNS_LABEL and unique within the pod.
                 *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                name: string
                /**
                 * @description nfs represents an NFS mount on the host that shares a pod's lifetime
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                 */
                nfs?: {
                  /**
                   * @description path that is exported by the NFS server.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                   */
                  path: string
                  /**
                   * @description readOnly here will force the NFS export to be mounted with read-only permissions.
                   *     Defaults to false.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                   */
                  readOnly?: boolean
                  /**
                   * @description server is the hostname or IP address of the NFS server.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                   */
                  server: string
                }
                /**
                 * @description persistentVolumeClaimVolumeSource represents a reference to a
                 *     PersistentVolumeClaim in the same namespace.
                 *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                persistentVolumeClaim?: {
                  /**
                   * @description claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                   *     More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                   */
                  claimName: string
                  /**
                   * @description readOnly Will force the ReadOnly setting in VolumeMounts.
                   *     Default false.
                   */
                  readOnly?: boolean
                }
                /**
                 * @description photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine.
                 *     Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
                 */
                photonPersistentDisk?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /** @description pdID is the ID that identifies Photon Controller persistent disk */
                  pdID: string
                }
                /**
                 * @description portworxVolume represents a portworx volume attached and mounted on kubelets host machine.
                 *     Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type
                 *     are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate
                 *     is on.
                 */
                portworxVolume?: {
                  /**
                   * @description fSType represents the filesystem type to mount
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /** @description volumeID uniquely identifies a Portworx volume */
                  volumeID: string
                }
                /** @description projected items for all in one resources secrets, configmaps, and downward API */
                projected?: {
                  /**
                   * Format: int32
                   * @description defaultMode are the mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /**
                   * @description sources is the list of volume projections. Each entry in this list
                   *     handles one source.
                   */
                  sources?: {
                    /**
                     * @description ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field
                     *     of ClusterTrustBundle objects in an auto-updating file.
                     *
                     *     Alpha, gated by the ClusterTrustBundleProjection feature gate.
                     *
                     *     ClusterTrustBundle objects can either be selected by name, or by the
                     *     combination of signer name and a label selector.
                     *
                     *     Kubelet performs aggressive normalization of the PEM contents written
                     *     into the pod filesystem.  Esoteric PEM features such as inter-block
                     *     comments and block headers are stripped.  Certificates are deduplicated.
                     *     The ordering of certificates within the file is arbitrary, and Kubelet
                     *     may change the order over time.
                     */
                    clusterTrustBundle?: {
                      /**
                       * @description Select all ClusterTrustBundles that match this label selector.  Only has
                       *     effect if signerName is set.  Mutually-exclusive with name.  If unset,
                       *     interpreted as "match nothing".  If set but empty, interpreted as "match
                       *     everything".
                       */
                      labelSelector?: {
                        /** @description matchExpressions is a list of label selector requirements. The requirements are ANDed. */
                        matchExpressions?: {
                          /** @description key is the label key that the selector applies to. */
                          key: string
                          /**
                           * @description operator represents a key's relationship to a set of values.
                           *     Valid operators are In, NotIn, Exists and DoesNotExist.
                           */
                          operator: string
                          /**
                           * @description values is an array of string values. If the operator is In or NotIn,
                           *     the values array must be non-empty. If the operator is Exists or DoesNotExist,
                           *     the values array must be empty. This array is replaced during a strategic
                           *     merge patch.
                           */
                          values?: string[]
                        }[]
                        /**
                         * @description matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                         *     map is equivalent to an element of matchExpressions, whose key field is "key", the
                         *     operator is "In", and the values array contains only "value". The requirements are ANDed.
                         */
                        matchLabels?: {
                          [key: string]: string
                        }
                      }
                      /**
                       * @description Select a single ClusterTrustBundle by object name.  Mutually-exclusive
                       *     with signerName and labelSelector.
                       */
                      name?: string
                      /**
                       * @description If true, don't block pod startup if the referenced ClusterTrustBundle(s)
                       *     aren't available.  If using name, then the named ClusterTrustBundle is
                       *     allowed not to exist.  If using signerName, then the combination of
                       *     signerName and labelSelector is allowed to match zero
                       *     ClusterTrustBundles.
                       */
                      optional?: boolean
                      /** @description Relative path from the volume root to write the bundle. */
                      path: string
                      /**
                       * @description Select all ClusterTrustBundles that match this signer name.
                       *     Mutually-exclusive with name.  The contents of all selected
                       *     ClusterTrustBundles will be unified and deduplicated.
                       */
                      signerName?: string
                    }
                    /** @description configMap information about the configMap data to project */
                    configMap?: {
                      /**
                       * @description items if unspecified, each key-value pair in the Data field of the referenced
                       *     ConfigMap will be projected into the volume as a file whose name is the
                       *     key and content is the value. If specified, the listed keys will be
                       *     projected into the specified paths, and unlisted keys will not be
                       *     present. If a key is specified which is not present in the ConfigMap,
                       *     the volume setup will error unless it is marked optional. Paths must be
                       *     relative and may not contain the '..' path or start with '..'.
                       */
                      items?: {
                        /** @description key is the key to project. */
                        key: string
                        /**
                         * Format: int32
                         * @description mode is Optional: mode bits used to set permissions on this file.
                         *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         *     If not specified, the volume defaultMode will be used.
                         *     This might be in conflict with other options that affect the file
                         *     mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number
                        /**
                         * @description path is the relative path of the file to map the key to.
                         *     May not be an absolute path.
                         *     May not contain the path element '..'.
                         *     May not start with the string '..'.
                         */
                        path: string
                      }[]
                      /**
                       * @description Name of the referent.
                       *     This field is effectively required, but due to backwards compatibility is
                       *     allowed to be empty. Instances of this type with an empty value here are
                       *     almost certainly wrong.
                       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                       * @default
                       */
                      name: string
                      /** @description optional specify whether the ConfigMap or its keys must be defined */
                      optional?: boolean
                    }
                    /** @description downwardAPI information about the downwardAPI data to project */
                    downwardAPI?: {
                      /** @description Items is a list of DownwardAPIVolume file */
                      items?: {
                        /** @description Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported. */
                        fieldRef?: {
                          /** @description Version of the schema the FieldPath is written in terms of, defaults to "v1". */
                          apiVersion?: string
                          /** @description Path of the field to select in the specified API version. */
                          fieldPath: string
                        }
                        /**
                         * Format: int32
                         * @description Optional: mode bits used to set permissions on this file, must be an octal value
                         *     between 0000 and 0777 or a decimal value between 0 and 511.
                         *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         *     If not specified, the volume defaultMode will be used.
                         *     This might be in conflict with other options that affect the file
                         *     mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number
                        /** @description Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
                        path: string
                        /**
                         * @description Selects a resource of the container: only resources limits and requests
                         *     (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                         */
                        resourceFieldRef?: {
                          /** @description Container name: required for volumes, optional for env vars */
                          containerName?: string
                          /** @description Specifies the output format of the exposed resources, defaults to "1" */
                          divisor?: number | string
                          /** @description Required: resource to select */
                          resource: string
                        }
                      }[]
                    }
                    /**
                     * @description Projects an auto-rotating credential bundle (private key and certificate
                     *     chain) that the pod can use either as a TLS client or server.
                     *
                     *     Kubelet generates a private key and uses it to send a
                     *     PodCertificateRequest to the named signer.  Once the signer approves the
                     *     request and issues a certificate chain, Kubelet writes the key and
                     *     certificate chain to the pod filesystem.  The pod does not start until
                     *     certificates have been issued for each podCertificate projected volume
                     *     source in its spec.
                     *
                     *     Kubelet will begin trying to rotate the certificate at the time indicated
                     *     by the signer using the PodCertificateRequest.Status.BeginRefreshAt
                     *     timestamp.
                     *
                     *     Kubelet can write a single file, indicated by the credentialBundlePath
                     *     field, or separate files, indicated by the keyPath and
                     *     certificateChainPath fields.
                     *
                     *     The credential bundle is a single file in PEM format.  The first PEM
                     *     entry is the private key (in PKCS#8 format), and the remaining PEM
                     *     entries are the certificate chain issued by the signer (typically,
                     *     signers will return their certificate chain in leaf-to-root order).
                     *
                     *     Prefer using the credential bundle format, since your application code
                     *     can read it atomically.  If you use keyPath and certificateChainPath,
                     *     your application must make two separate file reads. If these coincide
                     *     with a certificate rotation, it is possible that the private key and leaf
                     *     certificate you read may not correspond to each other.  Your application
                     *     will need to check for this condition, and re-read until they are
                     *     consistent.
                     *
                     *     The named signer controls chooses the format of the certificate it
                     *     issues; consult the signer implementation's documentation to learn how to
                     *     use the certificates it issues.
                     */
                    podCertificate?: {
                      /**
                       * @description Write the certificate chain at this path in the projected volume.
                       *
                       *     Most applications should use credentialBundlePath.  When using keyPath
                       *     and certificateChainPath, your application needs to check that the key
                       *     and leaf certificate are consistent, because it is possible to read the
                       *     files mid-rotation.
                       */
                      certificateChainPath?: string
                      /**
                       * @description Write the credential bundle at this path in the projected volume.
                       *
                       *     The credential bundle is a single file that contains multiple PEM blocks.
                       *     The first PEM block is a PRIVATE KEY block, containing a PKCS#8 private
                       *     key.
                       *
                       *     The remaining blocks are CERTIFICATE blocks, containing the issued
                       *     certificate chain from the signer (leaf and any intermediates).
                       *
                       *     Using credentialBundlePath lets your Pod's application code make a single
                       *     atomic read that retrieves a consistent key and certificate chain.  If you
                       *     project them to separate files, your application code will need to
                       *     additionally check that the leaf certificate was issued to the key.
                       */
                      credentialBundlePath?: string
                      /**
                       * @description Write the key at this path in the projected volume.
                       *
                       *     Most applications should use credentialBundlePath.  When using keyPath
                       *     and certificateChainPath, your application needs to check that the key
                       *     and leaf certificate are consistent, because it is possible to read the
                       *     files mid-rotation.
                       */
                      keyPath?: string
                      /**
                       * @description The type of keypair Kubelet will generate for the pod.
                       *
                       *     Valid values are "RSA3072", "RSA4096", "ECDSAP256", "ECDSAP384",
                       *     "ECDSAP521", and "ED25519".
                       */
                      keyType: string
                      /**
                       * Format: int32
                       * @description maxExpirationSeconds is the maximum lifetime permitted for the
                       *     certificate.
                       *
                       *     Kubelet copies this value verbatim into the PodCertificateRequests it
                       *     generates for this projection.
                       *
                       *     If omitted, kube-apiserver will set it to 86400(24 hours). kube-apiserver
                       *     will reject values shorter than 3600 (1 hour).  The maximum allowable
                       *     value is 7862400 (91 days).
                       *
                       *     The signer implementation is then free to issue a certificate with any
                       *     lifetime *shorter* than MaxExpirationSeconds, but no shorter than 3600
                       *     seconds (1 hour).  This constraint is enforced by kube-apiserver.
                       *     `kubernetes.io` signers will never issue certificates with a lifetime
                       *     longer than 24 hours.
                       */
                      maxExpirationSeconds?: number
                      /** @description Kubelet's generated CSRs will be addressed to this signer. */
                      signerName: string
                    }
                    /** @description secret information about the secret data to project */
                    secret?: {
                      /**
                       * @description items if unspecified, each key-value pair in the Data field of the referenced
                       *     Secret will be projected into the volume as a file whose name is the
                       *     key and content is the value. If specified, the listed keys will be
                       *     projected into the specified paths, and unlisted keys will not be
                       *     present. If a key is specified which is not present in the Secret,
                       *     the volume setup will error unless it is marked optional. Paths must be
                       *     relative and may not contain the '..' path or start with '..'.
                       */
                      items?: {
                        /** @description key is the key to project. */
                        key: string
                        /**
                         * Format: int32
                         * @description mode is Optional: mode bits used to set permissions on this file.
                         *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         *     If not specified, the volume defaultMode will be used.
                         *     This might be in conflict with other options that affect the file
                         *     mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number
                        /**
                         * @description path is the relative path of the file to map the key to.
                         *     May not be an absolute path.
                         *     May not contain the path element '..'.
                         *     May not start with the string '..'.
                         */
                        path: string
                      }[]
                      /**
                       * @description Name of the referent.
                       *     This field is effectively required, but due to backwards compatibility is
                       *     allowed to be empty. Instances of this type with an empty value here are
                       *     almost certainly wrong.
                       *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                       * @default
                       */
                      name: string
                      /** @description optional field specify whether the Secret or its key must be defined */
                      optional?: boolean
                    }
                    /** @description serviceAccountToken is information about the serviceAccountToken data to project */
                    serviceAccountToken?: {
                      /**
                       * @description audience is the intended audience of the token. A recipient of a token
                       *     must identify itself with an identifier specified in the audience of the
                       *     token, and otherwise should reject the token. The audience defaults to the
                       *     identifier of the apiserver.
                       */
                      audience?: string
                      /**
                       * Format: int64
                       * @description expirationSeconds is the requested duration of validity of the service
                       *     account token. As the token approaches expiration, the kubelet volume
                       *     plugin will proactively rotate the service account token. The kubelet will
                       *     start trying to rotate the token if the token is older than 80 percent of
                       *     its time to live or if the token is older than 24 hours.Defaults to 1 hour
                       *     and must be at least 10 minutes.
                       */
                      expirationSeconds?: number
                      /**
                       * @description path is the path relative to the mount point of the file to project the
                       *     token into.
                       */
                      path: string
                    }
                  }[]
                }
                /**
                 * @description quobyte represents a Quobyte mount on the host that shares a pod's lifetime.
                 *     Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
                 */
                quobyte?: {
                  /**
                   * @description group to map volume access to
                   *     Default is no group
                   */
                  group?: string
                  /**
                   * @description readOnly here will force the Quobyte volume to be mounted with read-only permissions.
                   *     Defaults to false.
                   */
                  readOnly?: boolean
                  /**
                   * @description registry represents a single or multiple Quobyte Registry services
                   *     specified as a string as host:port pair (multiple entries are separated with commas)
                   *     which acts as the central registry for volumes
                   */
                  registry: string
                  /**
                   * @description tenant owning the given Quobyte volume in the Backend
                   *     Used with dynamically provisioned Quobyte volumes, value is set by the plugin
                   */
                  tenant?: string
                  /**
                   * @description user to map volume access to
                   *     Defaults to serivceaccount user
                   */
                  user?: string
                  /** @description volume is a string that references an already created Quobyte volume by name. */
                  volume: string
                }
                /**
                 * @description rbd represents a Rados Block Device mount on the host that shares a pod's lifetime.
                 *     Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported.
                 */
                rbd?: {
                  /**
                   * @description fsType is the filesystem type of the volume that you want to mount.
                   *     Tip: Ensure that the filesystem type is supported by the host operating system.
                   *     Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
                   */
                  fsType?: string
                  /**
                   * @description image is the rados image name.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  image: string
                  /**
                   * @description keyring is the path to key ring for RBDUser.
                   *     Default is /etc/ceph/keyring.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   * @default /etc/ceph/keyring
                   */
                  keyring: string
                  /**
                   * @description monitors is a collection of Ceph monitors.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  monitors: string[]
                  /**
                   * @description pool is the rados pool name.
                   *     Default is rbd.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   * @default rbd
                   */
                  pool: string
                  /**
                   * @description readOnly here will force the ReadOnly setting in VolumeMounts.
                   *     Defaults to false.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef is name of the authentication secret for RBDUser. If provided
                   *     overrides keyring.
                   *     Default is nil.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description user is the rados user name.
                   *     Default is admin.
                   *     More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                   * @default admin
                   */
                  user: string
                }
                /**
                 * @description scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
                 *     Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
                 */
                scaleIO?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs".
                   *     Default is "xfs".
                   * @default xfs
                   */
                  fsType: string
                  /** @description gateway is the host address of the ScaleIO API Gateway. */
                  gateway: string
                  /** @description protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. */
                  protectionDomain?: string
                  /**
                   * @description readOnly Defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef references to the secret for ScaleIO user and other
                   *     sensitive information. If this is not provided, Login operation will fail.
                   */
                  secretRef: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /** @description sslEnabled Flag enable/disable SSL communication with Gateway, default false */
                  sslEnabled?: boolean
                  /**
                   * @description storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned.
                   *     Default is ThinProvisioned.
                   * @default ThinProvisioned
                   */
                  storageMode: string
                  /** @description storagePool is the ScaleIO Storage Pool associated with the protection domain. */
                  storagePool?: string
                  /** @description system is the name of the storage system as configured in ScaleIO. */
                  system: string
                  /**
                   * @description volumeName is the name of a volume already created in the ScaleIO system
                   *     that is associated with this volume source.
                   */
                  volumeName?: string
                }
                /**
                 * @description secret represents a secret that should populate this volume.
                 *     More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                 */
                secret?: {
                  /**
                   * Format: int32
                   * @description defaultMode is Optional: mode bits used to set permissions on created files by default.
                   *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                   *     YAML accepts both octal and decimal values, JSON requires decimal values
                   *     for mode bits. Defaults to 0644.
                   *     Directories within the path are not affected by this setting.
                   *     This might be in conflict with other options that affect the file
                   *     mode, like fsGroup, and the result can be other mode bits set.
                   */
                  defaultMode?: number
                  /**
                   * @description items If unspecified, each key-value pair in the Data field of the referenced
                   *     Secret will be projected into the volume as a file whose name is the
                   *     key and content is the value. If specified, the listed keys will be
                   *     projected into the specified paths, and unlisted keys will not be
                   *     present. If a key is specified which is not present in the Secret,
                   *     the volume setup will error unless it is marked optional. Paths must be
                   *     relative and may not contain the '..' path or start with '..'.
                   */
                  items?: {
                    /** @description key is the key to project. */
                    key: string
                    /**
                     * Format: int32
                     * @description mode is Optional: mode bits used to set permissions on this file.
                     *     Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     *     YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     *     If not specified, the volume defaultMode will be used.
                     *     This might be in conflict with other options that affect the file
                     *     mode, like fsGroup, and the result can be other mode bits set.
                     */
                    mode?: number
                    /**
                     * @description path is the relative path of the file to map the key to.
                     *     May not be an absolute path.
                     *     May not contain the path element '..'.
                     *     May not start with the string '..'.
                     */
                    path: string
                  }[]
                  /** @description optional field specify whether the Secret or its keys must be defined */
                  optional?: boolean
                  /**
                   * @description secretName is the name of the secret in the pod's namespace to use.
                   *     More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                   */
                  secretName?: string
                }
                /**
                 * @description storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
                 *     Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported.
                 */
                storageos?: {
                  /**
                   * @description fsType is the filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /**
                   * @description readOnly defaults to false (read/write). ReadOnly here will force
                   *     the ReadOnly setting in VolumeMounts.
                   */
                  readOnly?: boolean
                  /**
                   * @description secretRef specifies the secret to use for obtaining the StorageOS API
                   *     credentials.  If not specified, default values will be attempted.
                   */
                  secretRef?: {
                    /**
                     * @description Name of the referent.
                     *     This field is effectively required, but due to backwards compatibility is
                     *     allowed to be empty. Instances of this type with an empty value here are
                     *     almost certainly wrong.
                     *     More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     * @default
                     */
                    name: string
                  }
                  /**
                   * @description volumeName is the human-readable name of the StorageOS volume.  Volume
                   *     names are only unique within a namespace.
                   */
                  volumeName?: string
                  /**
                   * @description volumeNamespace specifies the scope of the volume within StorageOS.  If no
                   *     namespace is specified then the Pod's namespace will be used.  This allows the
                   *     Kubernetes name scoping to be mirrored within StorageOS for tighter integration.
                   *     Set VolumeName to any name to override the default behaviour.
                   *     Set to "default" if you are not using namespaces within StorageOS.
                   *     Namespaces that do not pre-exist within StorageOS will be created.
                   */
                  volumeNamespace?: string
                }
                /**
                 * @description vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine.
                 *     Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type
                 *     are redirected to the csi.vsphere.vmware.com CSI driver.
                 */
                vsphereVolume?: {
                  /**
                   * @description fsType is filesystem type to mount.
                   *     Must be a filesystem type supported by the host operating system.
                   *     Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                   */
                  fsType?: string
                  /** @description storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
                  storagePolicyID?: string
                  /** @description storagePolicyName is the storage Policy Based Management (SPBM) profile name. */
                  storagePolicyName?: string
                  /** @description volumePath is the path that identifies vSphere volume vmdk */
                  volumePath: string
                }
              }[]
            }
            /**
             * Format: int32
             * @description Number of desired Pods.
             */
            replicas?: number
          }
          /** @description Service is the configuration for the NGINX Service. */
          service?: {
            /**
             * @description ExternalTrafficPolicy describes how nodes distribute service traffic they
             *     receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs,
             *     and LoadBalancer IPs.
             * @default Local
             * @enum {string}
             */
            externalTrafficPolicy: "Cluster" | "Local"
            /**
             * @description LoadBalancerClass is the class of the load balancer implementation this Service belongs to.
             *     Requires service type to be LoadBalancer.
             */
            loadBalancerClass?: string
            /** @description LoadBalancerIP is a static IP address for the load balancer. Requires service type to be LoadBalancer. */
            loadBalancerIP?: string
            /**
             * @description LoadBalancerSourceRanges are the IP ranges (CIDR) that are allowed to access the load balancer.
             *     Requires service type to be LoadBalancer.
             */
            loadBalancerSourceRanges?: string[]
            /**
             * @description NodePorts are the list of NodePorts to expose on the NGINX data plane service.
             *     Each NodePort MUST map to a Gateway listener port, otherwise it will be ignored.
             *     The default NodePort range enforced by Kubernetes is 30000-32767.
             */
            nodePorts?: {
              /**
               * Format: int32
               * @description ListenerPort is the Gateway listener port that this NodePort maps to.
               */
              listenerPort: number
              /**
               * Format: int32
               * @description Port is the NodePort to expose.
               */
              port: number
            }[]
            /** @description Patches are custom patches to apply to the NGINX Service. */
            patches?: {
              /**
               * @description Type is the type of patch. Defaults to StrategicMerge.
               * @default StrategicMerge
               * @enum {string}
               */
              type: "StrategicMerge" | "Merge" | "JSONPatch"
              /**
               * @description Value is the patch data as raw JSON.
               *     For StrategicMerge and Merge patches, this should be a JSON object.
               *     For JSONPatch patches, this should be a JSON array of patch operations.
               */
              value?: unknown
            }[]
            /**
             * @description ServiceType describes ingress method for the Service.
             * @default LoadBalancer
             * @enum {string}
             */
            type: "ClusterIP" | "LoadBalancer" | "NodePort"
          }
        }
        /** @description Logging defines logging related settings for NGINX. */
        logging?: {
          /**
           * @description AgentLevel defines the log level of the NGINX agent process. Changing this value results in a
           *     re-roll of the NGINX deployment.
           * @default info
           * @enum {string}
           */
          agentLevel: "debug" | "info" | "error" | "panic" | "fatal"
          /**
           * @description ErrorLevel defines the error log level. Possible log levels listed in order of increasing severity are
           *     debug, info, notice, warn, error, crit, alert, and emerg. Setting a certain log level will cause all messages
           *     of the specified and more severe log levels to be logged. For example, the log level 'error' will cause error,
           *     crit, alert, and emerg messages to be logged. https://nginx.org/en/docs/ngx_core_module.html#error_log
           * @default info
           * @enum {string}
           */
          errorLevel: "debug" | "info" | "notice" | "warn" | "error" | "crit" | "alert" | "emerg"
        }
        /**
         * @description Metrics defines the configuration for Prometheus scraping metrics. Changing this value results in a
         *     re-roll of the NGINX deployment.
         */
        metrics?: {
          /** @description Disable serving Prometheus metrics on the listen port. */
          disable?: boolean
          /**
           * Format: int32
           * @description Port where the Prometheus metrics are exposed.
           */
          port?: number
        }
        /** @description NginxPlus specifies NGINX Plus additional settings. */
        nginxPlus?: {
          /** @description AllowedAddresses specifies IPAddresses or CIDR blocks to the allow list for accessing the NGINX Plus API. */
          allowedAddresses?: {
            /**
             * @description Type specifies the type of address.
             * @enum {string}
             */
            type: "CIDR" | "IPAddress"
            /** @description Value specifies the address value. */
            value: string
          }[]
        }
        /** @description RewriteClientIP defines configuration for rewriting the client IP to the original client's IP. */
        rewriteClientIP?: {
          /**
           * @description Mode defines how NGINX will rewrite the client's IP address.
           *     There are two possible modes:
           *     - ProxyProtocol: NGINX will rewrite the client's IP using the PROXY protocol header.
           *     - XForwardedFor: NGINX will rewrite the client's IP using the X-Forwarded-For header.
           *     Sets NGINX directive real_ip_header: https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header
           * @enum {string}
           */
          mode?: "ProxyProtocol" | "XForwardedFor"
          /**
           * @description SetIPRecursively configures whether recursive search is used when selecting the client's address from
           *     the X-Forwarded-For header. It is used in conjunction with TrustedAddresses.
           *     If enabled, NGINX will recurse on the values in X-Forwarded-Header from the end of array
           *     to start of array and select the first untrusted IP.
           *     For example, if X-Forwarded-For is [11.11.11.11, 22.22.22.22, 55.55.55.1],
           *     and TrustedAddresses is set to 55.55.55.1/32, NGINX will rewrite the client IP to 22.22.22.22.
           *     If disabled, NGINX will select the IP at the end of the array.
           *     In the previous example, 55.55.55.1 would be selected.
           *     Sets NGINX directive real_ip_recursive: https://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_recursive
           */
          setIPRecursively?: boolean
          /**
           * @description TrustedAddresses specifies the addresses that are trusted to send correct client IP information.
           *     If a request comes from a trusted address, NGINX will rewrite the client IP information,
           *     and forward it to the backend in the X-Forwarded-For* and X-Real-IP headers.
           *     If the request does not come from a trusted address, NGINX will not rewrite the client IP information.
           *     To trust all addresses (not recommended for production), set to 0.0.0.0/0.
           *     If no addresses are provided, NGINX will not rewrite the client IP information.
           *     Sets NGINX directive set_real_ip_from: https://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from
           *     This field is required if mode is set.
           */
          trustedAddresses?: {
            /**
             * @description Type specifies the type of address.
             * @enum {string}
             */
            type: "CIDR" | "IPAddress" | "Hostname"
            /** @description Value specifies the address value. */
            value: string
          }[]
        }
        /** @description Telemetry specifies the OpenTelemetry configuration. */
        telemetry?: {
          /** @description DisabledFeatures specifies OpenTelemetry features to be disabled. */
          disabledFeatures?: "DisableTracing"[]
          /** @description Exporter specifies OpenTelemetry export parameters. */
          exporter?: {
            /**
             * Format: int32
             * @description BatchCount is the number of pending batches per worker, spans exceeding the limit are dropped.
             *     Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_exporter
             */
            batchCount?: number
            /**
             * Format: int32
             * @description BatchSize is the maximum number of spans to be sent in one batch per worker.
             *     Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_exporter
             */
            batchSize?: number
            /**
             * @description Endpoint is the address of OTLP/gRPC endpoint that will accept telemetry data.
             *     Format: alphanumeric hostname with optional http scheme and optional port.
             */
            endpoint?: string
            /**
             * @description Interval is the maximum interval between two exports.
             *     Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_exporter
             */
            interval?: string
          }
          /**
           * @description ServiceName is the "service.name" attribute of the OpenTelemetry resource.
           *     Default is 'ngf:<gateway-namespace>:<gateway-name>'. If a value is provided by the user,
           *     then the default becomes a prefix to that value.
           */
          serviceName?: string
          /** @description SpanAttributes are custom key/value attributes that are added to each span. */
          spanAttributes?: {
            /**
             * @description Key is the key for a span attribute.
             *     Format: must have all '"' escaped and must not contain any '$' or end with an unescaped '\'
             */
            key: string
            /**
             * @description Value is the value for a span attribute.
             *     Format: must have all '"' escaped and must not contain any '$' or end with an unescaped '\'
             */
            value: string
          }[]
        }
        /**
         * Format: int32
         * @description WorkerConnections specifies the maximum number of simultaneous connections that can be opened by a worker process.
         *     Default is 1024.
         */
        workerConnections?: number
      }
    }
    /** @description NginxProxyList is a list of NginxProxy */
    "org.nginx.gateway.v1alpha2.NginxProxyList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of nginxproxies. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
      items: components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /**
     * @description ObservabilityPolicy is a Direct Attached Policy. It provides a way to configure observability settings for
     *     the NGINX Gateway Fabric data plane. Used in conjunction with the NginxProxy CRD that is attached to the
     *     GatewayClass parametersRef.
     */
    "org.nginx.gateway.v1alpha2.ObservabilityPolicy": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /** @description Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
      metadata?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /** @description Spec defines the desired state of the ObservabilityPolicy. */
      spec: {
        /**
         * @description TargetRefs identifies the API object(s) to apply the policy to.
         *     Objects must be in the same namespace as the policy.
         *     Support: HTTPRoute, GRPCRoute.
         *
         *     TargetRefs must be _distinct_. This means that the multi-part key defined by `kind` and `name` must
         *     be unique across all targetRef entries in the ObservabilityPolicy.
         */
        targetRefs: {
          /** @description Group is the group of the target resource. */
          group: string
          /** @description Kind is kind of the target resource. */
          kind: string
          /** @description Name is the name of the target resource. */
          name: string
        }[]
        /** @description Tracing allows for enabling and configuring tracing. */
        tracing?: {
          /**
           * @description Context specifies how to propagate traceparent/tracestate headers.
           *     Default: https://nginx.org/en/docs/ngx_otel_module.html#otel_trace_context
           * @enum {string}
           */
          context?: "extract" | "inject" | "propagate" | "ignore"
          /**
           * Format: int32
           * @description Ratio is the percentage of traffic that should be sampled. Integer from 0 to 100.
           *     By default, 100% of http requests are traced. Not applicable for parent-based tracing.
           *     If ratio is set to 0, tracing is disabled.
           */
          ratio?: number
          /** @description SpanAttributes are custom key/value attributes that are added to each span. */
          spanAttributes?: {
            /**
             * @description Key is the key for a span attribute.
             *     Format: must have all '"' escaped and must not contain any '$' or end with an unescaped '\'
             */
            key: string
            /**
             * @description Value is the value for a span attribute.
             *     Format: must have all '"' escaped and must not contain any '$' or end with an unescaped '\'
             */
            value: string
          }[]
          /**
           * @description SpanName defines the name of the Otel span. By default is the name of the location for a request.
           *     If specified, applies to all locations that are created for a route.
           *     Format: must have all '"' escaped and must not contain any '$' or end with an unescaped '\'
           *     Examples of invalid names: some-$value, quoted-"value"-name, unescaped\
           */
          spanName?: string
          /**
           * @description Strategy defines if tracing is ratio-based or parent-based.
           * @enum {string}
           */
          strategy: "ratio" | "parent"
        }
      }
      /** @description Status defines the state of the ObservabilityPolicy. */
      status?: {
        /**
         * @description Ancestors is a list of ancestor resources (usually Gateways) that are
         *     associated with the policy, and the status of the policy with respect to
         *     each ancestor. When this policy attaches to a parent, the controller that
         *     manages the parent and the ancestors MUST add an entry to this list when
         *     the controller first sees the policy and SHOULD update the entry as
         *     appropriate when the relevant ancestor is modified.
         *
         *     Note that choosing the relevant ancestor is left to the Policy designers;
         *     an important part of Policy design is designing the right object level at
         *     which to namespace this status.
         *
         *     Note also that implementations MUST ONLY populate ancestor status for
         *     the Ancestor resources they are responsible for. Implementations MUST
         *     use the ControllerName field to uniquely identify the entries in this list
         *     that they are responsible for.
         *
         *     Note that to achieve this, the list of PolicyAncestorStatus structs
         *     MUST be treated as a map with a composite key, made up of the AncestorRef
         *     and ControllerName fields combined.
         *
         *     A maximum of 16 ancestors will be represented in this list. An empty list
         *     means the Policy is not relevant for any ancestors.
         *
         *     If this slice is full, implementations MUST NOT add further entries.
         *     Instead they MUST consider the policy unimplementable and signal that
         *     on any related resources such as the ancestor that would be referenced
         *     here. For example, if this list was full on BackendTLSPolicy, no
         *     additional Gateways would be able to reference the Service targeted by
         *     the BackendTLSPolicy.
         */
        ancestors: {
          /**
           * @description AncestorRef corresponds with a ParentRef in the spec that this
           *     PolicyAncestorStatus struct describes the status of.
           */
          ancestorRef: {
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
            /**
             * @description Name is the name of the referent.
             *
             *     Support: Core
             */
            name: string
            /**
             * @description Namespace is the namespace of the referent. When unspecified, this refers
             *     to the local namespace of the Route.
             *
             *     Note that there are specific rules for ParentRefs which cross namespace
             *     boundaries. Cross-namespace references are only valid if they are explicitly
             *     allowed by something in the namespace they are referring to. For example:
             *     Gateway has the AllowedRoutes field, and ReferenceGrant provides a
             *     generic way to enable any other kind of cross-namespace reference.
             *
             *     <gateway:experimental:description>
             *     ParentRefs from a Route to a Service in the same namespace are "producer"
             *     routes, which apply default routing rules to inbound connections from
             *     any namespace to the Service.
             *
             *     ParentRefs from a Route to a Service in a different namespace are
             *     "consumer" routes, and these routing rules are only applied to outbound
             *     connections originating from the same namespace as the Route, for which
             *     the intended destination of the connections are a Service targeted as a
             *     ParentRef of the Route.
             *     </gateway:experimental:description>
             *
             *     Support: Core
             */
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
             *     <gateway:experimental:description>
             *     When the parent resource is a Service, this targets a specific port in the
             *     Service spec. When both Port (experimental) and SectionName are specified,
             *     the name and port of the selected port must match both specified values.
             *     </gateway:experimental:description>
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
            /**
             * @description SectionName is the name of a section within the target resource. In the
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
             *     Support: Core
             */
            sectionName?: string
          }
          /** @description Conditions describes the status of the Policy with respect to the given Ancestor. */
          conditions?: {
            /**
             * Format: date-time
             * @description lastTransitionTime is the last time the condition transitioned from one status to another.
             *     This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string
            /**
             * @description message is a human readable message indicating details about the transition.
             *     This may be an empty string.
             */
            message: string
            /**
             * Format: int64
             * @description observedGeneration represents the .metadata.generation that the condition was set based upon.
             *     For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             *     with respect to the current state of the instance.
             */
            observedGeneration?: number
            /**
             * @description reason contains a programmatic identifier indicating the reason for the condition's last transition.
             *     Producers of specific condition types may define expected values and meanings for this field,
             *     and whether the values are considered a guaranteed API.
             *     The value should be a CamelCase string.
             *     This field may not be empty.
             */
            reason: string
            /**
             * @description status of the condition, one of True, False, Unknown.
             * @enum {string}
             */
            status: "True" | "False" | "Unknown"
            /** @description type of condition in CamelCase or in foo.example.com/CamelCase. */
            type: string
          }[]
          /**
           * @description ControllerName is a domain/path string that indicates the name of the
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
           *     longer necessary.
           */
          controllerName: string
        }[]
      }
    }
    /** @description ObservabilityPolicyList is a list of ObservabilityPolicy */
    "org.nginx.gateway.v1alpha2.ObservabilityPolicyList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description List of observabilitypolicies. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md */
      items: components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"][]
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
  listGatewayNginxOrgV1alpha2NamespacedNginxProxy: {
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxyList"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxyList"]
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
  createGatewayNginxOrgV1alpha2NamespacedNginxProxy: {
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
        "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
        "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
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
  deleteGatewayNginxOrgV1alpha2CollectionNamespacedNginxProxy: {
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
  readGatewayNginxOrgV1alpha2NamespacedNginxProxy: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the NginxProxy */
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
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
  replaceGatewayNginxOrgV1alpha2NamespacedNginxProxy: {
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
        /** @description name of the NginxProxy */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
        "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
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
  deleteGatewayNginxOrgV1alpha2NamespacedNginxProxy: {
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
        /** @description name of the NginxProxy */
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
  patchGatewayNginxOrgV1alpha2NamespacedNginxProxy: {
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
        /** @description name of the NginxProxy */
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"]
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
  listGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy: {
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicyList"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicyList"]
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
  createGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy: {
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
        "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  deleteGatewayNginxOrgV1alpha2CollectionNamespacedObservabilityPolicy: {
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
  readGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the ObservabilityPolicy */
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  replaceGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy: {
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
        /** @description name of the ObservabilityPolicy */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  deleteGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy: {
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
        /** @description name of the ObservabilityPolicy */
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
  patchGatewayNginxOrgV1alpha2NamespacedObservabilityPolicy: {
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
        /** @description name of the ObservabilityPolicy */
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  readGatewayNginxOrgV1alpha2NamespacedObservabilityPolicyStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
        /**
         * @description resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
         *
         *     Defaults to unset
         */
        resourceVersion?: string
      }
      header?: never
      path: {
        /** @description name of the ObservabilityPolicy */
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  replaceGatewayNginxOrgV1alpha2NamespacedObservabilityPolicyStatus: {
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
        /** @description name of the ObservabilityPolicy */
        name: string
        /** @description object name and auth scope, such as for teams and projects */
        namespace: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  patchGatewayNginxOrgV1alpha2NamespacedObservabilityPolicyStatus: {
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
        /** @description name of the ObservabilityPolicy */
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"]
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
  listGatewayNginxOrgV1alpha2NginxProxyForAllNamespaces: {
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxyList"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxyList"]
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
  listGatewayNginxOrgV1alpha2ObservabilityPolicyForAllNamespaces: {
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
          "application/json": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicyList"]
          "application/yaml": components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicyList"]
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
  NginxProxy: Omit<components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxy"], "status">
  NginxProxyList: Omit<components["schemas"]["org.nginx.gateway.v1alpha2.NginxProxyList"], "status">
  ObservabilityPolicy: Omit<components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicy"], "status">
  ObservabilityPolicyList: Omit<components["schemas"]["org.nginx.gateway.v1alpha2.ObservabilityPolicyList"], "status">
}

export default api
