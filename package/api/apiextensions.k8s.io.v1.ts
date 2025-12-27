export interface paths {
  "/apis/apiextensions.k8s.io/v1/": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description get available resources */
    get: operations["getApiextensionsV1APIResources"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apiextensions.k8s.io/v1/customresourcedefinitions": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description list or watch objects of kind CustomResourceDefinition */
    get: operations["listApiextensionsV1CustomResourceDefinition"]
    put?: never
    /** @description create a CustomResourceDefinition */
    post: operations["createApiextensionsV1CustomResourceDefinition"]
    /** @description delete collection of CustomResourceDefinition */
    delete: operations["deleteApiextensionsV1CollectionCustomResourceDefinition"]
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the CustomResourceDefinition */
        name: string
      }
      cookie?: never
    }
    /** @description read the specified CustomResourceDefinition */
    get: operations["readApiextensionsV1CustomResourceDefinition"]
    /** @description replace the specified CustomResourceDefinition */
    put: operations["replaceApiextensionsV1CustomResourceDefinition"]
    post?: never
    /** @description delete a CustomResourceDefinition */
    delete: operations["deleteApiextensionsV1CustomResourceDefinition"]
    options?: never
    head?: never
    /** @description partially update the specified CustomResourceDefinition */
    patch: operations["patchApiextensionsV1CustomResourceDefinition"]
    trace?: never
  }
  "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status": {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the CustomResourceDefinition */
        name: string
      }
      cookie?: never
    }
    /** @description read status of the specified CustomResourceDefinition */
    get: operations["readApiextensionsV1CustomResourceDefinitionStatus"]
    /** @description replace status of the specified CustomResourceDefinition */
    put: operations["replaceApiextensionsV1CustomResourceDefinitionStatus"]
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description partially update status of the specified CustomResourceDefinition */
    patch: operations["patchApiextensionsV1CustomResourceDefinitionStatus"]
    trace?: never
  }
  "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions": {
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
    /** @description watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead. */
    get: operations["watchApiextensionsV1CustomResourceDefinitionList"]
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}": {
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
        /** @description name of the CustomResourceDefinition */
        name: string
      }
      cookie?: never
    }
    /** @description watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
    get: operations["watchApiextensionsV1CustomResourceDefinition"]
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
    /** @description CustomResourceColumnDefinition specifies a column for server side printing. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition": {
      /** @description description is a human readable description of this column. */
      description?: string
      /** @description format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details. */
      format?: string
      /**
       * @description jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
       * @default
       */
      jsonPath: string
      /**
       * @description name is a human readable name for the column.
       * @default
       */
      name: string
      /**
       * Format: int32
       * @description priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
       */
      priority?: number
      /**
       * @description type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
       * @default
       */
      type: string
    }
    /** @description CustomResourceConversion describes how to convert different versions of a CR. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion": {
      /**
       * @description strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information
       *       is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
       * @default
       */
      strategy: string
      /** @description webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`. */
      webhook?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion"]
    }
    /** @description CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"]
      /**
       * @description spec describes how the user wants the resources to appear
       * @default {}
       */
      spec:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec"]
      /**
       * @description status indicates the actual state of the CustomResourceDefinition
       * @default {}
       */
      status:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus"]
    }
    /** @description CustomResourceDefinitionCondition contains details for the current condition of this pod. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition": {
      /** @description lastTransitionTime last time the condition transitioned from one status to another. */
      lastTransitionTime?: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.Time"]
      /** @description message is a human-readable message indicating details about last transition. */
      message?: string
      /** @description reason is a unique, one-word, CamelCase reason for the condition's last transition. */
      reason?: string
      /**
       * @description status is the status of the condition. Can be True, False, Unknown.
       * @default
       */
      status: string
      /**
       * @description type is the type of the condition. Types include Established, NamesAccepted and Terminating.
       * @default
       */
      type: string
    }
    /** @description CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList": {
      /** @description APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
      apiVersion?: string
      /** @description items list individual CustomResourceDefinition objects */
      items:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"][]
      /** @description Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
      kind?: string
      /**
       * @description Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       * @default {}
       */
      metadata: components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"]
    }
    /** @description CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames": {
      /** @description categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`. */
      categories?: string[]
      /**
       * @description kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
       * @default
       */
      kind: string
      /** @description listKind is the serialized kind of the list for this resource. Defaults to "`kind`List". */
      listKind?: string
      /**
       * @description plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
       * @default
       */
      plural: string
      /** @description shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase. */
      shortNames?: string[]
      /** @description singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`. */
      singular?: string
    }
    /** @description CustomResourceDefinitionSpec describes how a user wants their resource to appear */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec": {
      /** @description conversion defines conversion settings for the CRD. */
      conversion?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion"]
      /**
       * @description group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
       * @default
       */
      group: string
      /**
       * @description names specify the resource and kind names for the custom resource.
       * @default {}
       */
      names:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames"]
      /** @description preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details. */
      preserveUnknownFields?: boolean
      /**
       * @description scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
       * @default
       */
      scope: string
      /** @description versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
      versions: components["schemas"][
        "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion"
      ][]
    }
    /** @description CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus": {
      /**
       * @description acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.
       * @default {}
       */
      acceptedNames:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames"]
      /** @description conditions indicate state for particular aspects of a CustomResourceDefinition */
      conditions?: components["schemas"][
        "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition"
      ][]
      /** @description storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list. */
      storedVersions?: string[]
    }
    /** @description CustomResourceDefinitionVersion describes a version for CRD. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion": {
      /** @description additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used. */
      additionalPrinterColumns?: components["schemas"][
        "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition"
      ][]
      /** @description deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. */
      deprecated?: boolean
      /** @description deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. */
      deprecationWarning?: string
      /**
       * @description name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
       * @default
       */
      name: string
      /** @description schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource. */
      schema?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation"]
      /** @description selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors */
      selectableFields?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField"][]
      /**
       * @description served is a flag enabling/disabling this version from being served via REST APIs
       * @default false
       */
      served: boolean
      /**
       * @description storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
       * @default false
       */
      storage: boolean
      /** @description subresources specify what subresources this version of the defined custom resource have. */
      subresources?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources"]
    }
    /** @description CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale": {
      /** @description labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string. */
      labelSelectorPath?: string
      /**
       * @description specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET.
       * @default
       */
      specReplicasPath: string
      /**
       * @description statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0.
       * @default
       */
      statusReplicasPath: string
    }
    /** @description CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus": Record<string, never>
    /** @description CustomResourceSubresources defines the status and scale subresources for CustomResources. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources": {
      /** @description scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object. */
      scale?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale"]
      /** @description status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object. */
      status?: components["schemas"][
        "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus"
      ]
    }
    /** @description CustomResourceValidation is a list of validation methods for CustomResources. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation": {
      /** @description openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning. */
      openAPIV3Schema?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"]
    }
    /** @description ExternalDocumentation allows referencing an external resource for extended documentation. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation": {
      description?: string
      url?: string
    }
    /** @description JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON": unknown
    /** @description JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps": {
      $ref?: string
      $schema?: string
      additionalItems?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool"]
      additionalProperties?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool"]
      allOf?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"][]
      anyOf?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"][]
      /** @description default is a default value for undefined object fields. Defaulting is a beta feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false. */
      default?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON"]
      definitions?: {
        [key: string]: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"]
      }
      dependencies?: {
        [key: string]:
          components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray"]
      }
      description?: string
      enum?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON"][]
      example?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON"]
      exclusiveMaximum?: boolean
      exclusiveMinimum?: boolean
      externalDocs?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation"]
      /**
       * @description format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:
       *
       *     - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\\d{3}[- ]?\\d{2}[- ]?\\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.
       */
      format?: string
      id?: string
      items?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray"]
      /** Format: int64 */
      maxItems?: number
      /** Format: int64 */
      maxLength?: number
      /** Format: int64 */
      maxProperties?: number
      /** Format: double */
      maximum?: number
      /** Format: int64 */
      minItems?: number
      /** Format: int64 */
      minLength?: number
      /** Format: int64 */
      minProperties?: number
      /** Format: double */
      minimum?: number
      /** Format: double */
      multipleOf?: number
      not?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"]
      nullable?: boolean
      oneOf?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"][]
      pattern?: string
      patternProperties?: {
        [key: string]: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"]
      }
      properties?: {
        [key: string]: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"]
      }
      required?: string[]
      title?: string
      type?: string
      uniqueItems?: boolean
      /** @description x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata). */
      "x-kubernetes-embedded-resource"?: boolean
      /**
       * @description x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:
       *
       *     1) anyOf:
       *        - type: integer
       *        - type: string
       *     2) allOf:
       *        - anyOf:
       *          - type: integer
       *          - type: string
       *        - ... zero or more
       */
      "x-kubernetes-int-or-string"?: boolean
      /**
       * @description x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.
       *
       *     This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).
       *
       *     The properties specified must either be required or have a default value, to ensure those properties are present for all list items.
       */
      "x-kubernetes-list-map-keys"?: string[]
      /**
       * @description x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:
       *
       *     1) `atomic`: the list is treated as a single entity, like a scalar.
       *          Atomic lists will be entirely replaced when updated. This extension
       *          may be used on any type of list (struct, scalar, ...).
       *     2) `set`:
       *          Sets are lists that must not have multiple items with the same value. Each
       *          value must be a scalar, an object with x-kubernetes-map-type `atomic` or an
       *          array with x-kubernetes-list-type `atomic`.
       *     3) `map`:
       *          These lists are like maps in that their elements have a non-index key
       *          used to identify them. Order is preserved upon merge. The map tag
       *          must only be used on a list with elements of type object.
       *     Defaults to atomic for arrays.
       */
      "x-kubernetes-list-type"?: string
      /**
       * @description x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:
       *
       *     1) `granular`:
       *          These maps are actual maps (key-value pairs) and each fields are independent
       *          from each other (they can each be manipulated by separate actors). This is
       *          the default behaviour for all maps.
       *     2) `atomic`: the list is treated as a single entity, like a scalar.
       *          Atomic maps will be entirely replaced when updated.
       */
      "x-kubernetes-map-type"?: string
      /** @description x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden. */
      "x-kubernetes-preserve-unknown-fields"?: boolean
      /** @description x-kubernetes-validations describes a list of validation rules written in the CEL expression language. */
      "x-kubernetes-validations"?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule"][]
    }
    /** @description JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray": unknown
    /** @description JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool": unknown
    /** @description JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray": unknown
    /** @description SelectableField specifies the JSON path of a field that may be used with field selectors. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField": {
      /**
       * @description jsonPath is a simple JSON path which is evaluated against each custom resource to produce a field selector value. Only JSON paths without the array notation are allowed. Must point to a field of type string, boolean or integer. Types with enum values and strings with formats are allowed. If jsonPath refers to absent field in a resource, the jsonPath evaluates to an empty string. Must not point to metdata fields. Required.
       * @default
       */
      jsonPath: string
    }
    /** @description ServiceReference holds a reference to Service.legacy.k8s.io */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference": {
      /**
       * @description name is the name of the service. Required
       * @default
       */
      name: string
      /**
       * @description namespace is the namespace of the service. Required
       * @default
       */
      namespace: string
      /** @description path is an optional URL path at which the webhook will be contacted. */
      path?: string
      /**
       * Format: int32
       * @description port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
       */
      port?: number
    }
    /** @description ValidationRule describes a validation rule written in the CEL expression language. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ValidationRule": {
      /** @description fieldPath represents the field path returned when the validation fails. It must be a relative JSON path (i.e. with array notation) scoped to the location of this x-kubernetes-validations extension in the schema and refer to an existing field. e.g. when validation checks if a specific attribute `foo` under a map `testMap`, the fieldPath could be set to `.testMap.foo` If the validation checks two lists must have unique attributes, the fieldPath could be set to either of the list: e.g. `.testList` It does not support list numeric index. It supports child operation to refer to an existing field currently. Refer to [JSONPath support in Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/) for more info. Numeric index of array is not supported. For field name which contains special characters, use `['specialName']` to refer the field name. e.g. for attribute `foo.34$` appears in a list `testList`, the fieldPath could be set to `.testList['foo.34$']` */
      fieldPath?: string
      /** @description Message represents the message displayed when validation fails. The message is required if the Rule contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host" */
      message?: string
      /** @description MessageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a rule, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the rule; the only difference is the return type. Example: "x must be less than max ("+string(self.max)+")" */
      messageExpression?: string
      /**
       * @description optionalOldSelf is used to opt a transition rule into evaluation even when the object is first created, or if the old object is missing the value.
       *
       *     When enabled `oldSelf` will be a CEL optional whose value will be `None` if there is no old value, or when the object is initially created.
       *
       *     You may check for presence of oldSelf using `oldSelf.hasValue()` and unwrap it after checking using `oldSelf.value()`. Check the CEL documentation for Optional types for more information: https://pkg.go.dev/github.com/google/cel-go/cel#OptionalTypes
       *
       *     May not be set unless `oldSelf` is used in `rule`.
       */
      optionalOldSelf?: boolean
      /**
       * @description reason provides a machine-readable validation failure reason that is returned to the caller when a request fails this validation rule. The HTTP status code returned to the caller will match the reason of the reason of the first failed validation rule. The currently supported reasons are: "FieldValueInvalid", "FieldValueForbidden", "FieldValueRequired", "FieldValueDuplicate". If not set, default to use "FieldValueInvalid". All future added reasons must be accepted by clients when reading this value and unknown reasons should be treated as FieldValueInvalid.
       *
       *     Possible enum values:
       *      - `"FieldValueDuplicate"` is used to report collisions of values that must be unique (e.g. unique IDs).
       *      - `"FieldValueForbidden"` is used to report valid (as per formatting rules) values which would be accepted under some conditions, but which are not permitted by the current conditions (such as security policy).
       *      - `"FieldValueInvalid"` is used to report malformed values (e.g. failed regex match, too long, out of bounds).
       *      - `"FieldValueRequired"` is used to report required values that are not provided (e.g. empty strings, null values, or empty arrays).
       * @enum {string}
       */
      reason?: "FieldValueDuplicate" | "FieldValueForbidden" | "FieldValueInvalid" | "FieldValueRequired"
      /**
       * @description Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The `self` variable in the CEL expression is bound to the scoped value. Example: - Rule scoped to the root of a resource with a status subresource: {"rule": "self.status.actual <= self.spec.maxDesired"}
       *
       *     If the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via `self.field` and field presence can be checked via `has(self.field)`. Null valued fields are treated as absent fields in CEL expressions. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via `self[mapKey]`, map containment can be checked via `mapKey in self` and all entries of the map are accessible via CEL macros and functions such as `self.all(...)`. If the Rule is scoped to an array, the elements of the array are accessible via `self[i]` and also by macros and functions. If the Rule is scoped to a scalar, `self` is bound to the scalar value. Examples: - Rule scoped to a map of objects: {"rule": "self.components['Widget'].priority < 10"} - Rule scoped to a list of integers: {"rule": "self.values.all(value, value >= 0 && value < 100)"} - Rule scoped to a string value: {"rule": "self.startsWith('kube')"}
       *
       *     The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object and from any x-kubernetes-embedded-resource annotated objects. No other metadata properties are accessible.
       *
       *     Unknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an "unknown type". An "unknown type" is recursively defined as:
       *       - A schema with no type and x-kubernetes-preserve-unknown-fields set to true
       *       - An array where the items schema is of an "unknown type"
       *       - An object where the additionalProperties schema is of an "unknown type"
       *
       *     Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:
       *     	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",
       *     	  "import", "let", "loop", "package", "namespace", "return".
       *     Examples:
       *       - Rule accessing a property named "namespace": {"rule": "self.__namespace__ > 0"}
       *       - Rule accessing a property named "x-prop": {"rule": "self.x__dash__prop > 0"}
       *       - Rule accessing a property named "redact__d": {"rule": "self.redact__underscores__d > 0"}
       *
       *     Equality on arrays with x-kubernetes-list-type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:
       *       - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and
       *         non-intersecting elements in `Y` are appended, retaining their partial order.
       *       - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values
       *         are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with
       *         non-intersecting keys are appended, retaining their partial order.
       *
       *     If `rule` makes use of the `oldSelf` variable it is implicitly a `transition rule`.
       *
       *     By default, the `oldSelf` variable is the same type as `self`. When `optionalOldSelf` is true, the `oldSelf` variable is a CEL optional
       *      variable whose value() is the same type as `self`.
       *     See the documentation for the `optionalOldSelf` field for details.
       *
       *     Transition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found. You can opt a transition rule into unconditional evaluation by setting `optionalOldSelf` to true.
       * @default
       */
      rule: string
    }
    /** @description WebhookClientConfig contains the information to make a TLS connection with the webhook. */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig": {
      /**
       * Format: byte
       * @description caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
       */
      caBundle?: string
      /**
       * @description service is a reference to the service for this webhook. Either service or url must be specified.
       *
       *     If the webhook is running within the cluster, then you should use `service`.
       */
      service?: components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference"]
      /**
       * @description url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
       *
       *     The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
       *
       *     Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
       *
       *     The scheme must be "https"; the URL must begin with "https://".
       *
       *     A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
       *
       *     Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
       */
      url?: string
    }
    /** @description WebhookConversion describes how to call a conversion webhook */
    "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion": {
      /** @description clientConfig is the instructions for how to call the webhook if strategy is `Webhook`. */
      clientConfig?:
        components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig"]
      /** @description conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. */
      conversionReviewVersions: string[]
    }
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
  getApiextensionsV1APIResources: {
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
  listApiextensionsV1CustomResourceDefinition: {
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
          "application/json": components["schemas"][
            "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"
          ]
          "application/json;stream=watch": components["schemas"][
            "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"
          ]
          "application/vnd.kubernetes.protobuf": components["schemas"][
            "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"
          ]
          "application/vnd.kubernetes.protobuf;stream=watch": components["schemas"][
            "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"
          ]
          "application/yaml": components["schemas"][
            "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"
          ]
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
  createApiextensionsV1CustomResourceDefinition: {
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
        "*/*":
          components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
        }
      }
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  deleteApiextensionsV1CollectionCustomResourceDefinition: {
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
  readApiextensionsV1CustomResourceDefinition: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the CustomResourceDefinition */
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
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  replaceApiextensionsV1CustomResourceDefinition: {
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
        /** @description name of the CustomResourceDefinition */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*":
          components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  deleteApiextensionsV1CustomResourceDefinition: {
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
        /** @description name of the CustomResourceDefinition */
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
  patchApiextensionsV1CustomResourceDefinition: {
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
        /** @description name of the CustomResourceDefinition */
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
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  readApiextensionsV1CustomResourceDefinitionStatus: {
    parameters: {
      query?: {
        /** @description If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
        pretty?: string
      }
      header?: never
      path: {
        /** @description name of the CustomResourceDefinition */
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
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  replaceApiextensionsV1CustomResourceDefinitionStatus: {
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
        /** @description name of the CustomResourceDefinition */
        name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        "*/*":
          components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  patchApiextensionsV1CustomResourceDefinitionStatus: {
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
        /** @description name of the CustomResourceDefinition */
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
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
        }
      }
      /** @description Created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          "application/json":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/vnd.kubernetes.protobuf":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
          "application/yaml":
            components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"]
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
  watchApiextensionsV1CustomResourceDefinitionList: {
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
  watchApiextensionsV1CustomResourceDefinition: {
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
        /** @description name of the CustomResourceDefinition */
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

type Resource<T, U> = Omit<T, "status"> & { apiVersion: "apiextensions.k8s.io/v1"; kind: U }

export interface api {
  CustomResourceDefinition: Resource<
    components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition"],
    "CustomResourceDefinition"
  >
  CustomResourceDefinitionList: Resource<
    components["schemas"]["io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList"],
    "CustomResourceDefinitionList"
  >
  DeleteOptions: Resource<components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"], "DeleteOptions">
  WatchEvent: Resource<components["schemas"]["io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent"], "WatchEvent">
}

export default api
