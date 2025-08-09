import * as pulumi from "@pulumi/pulumi";
export declare class EdgeDeploymentServiceBackend extends pulumi.CustomResource {
    /**
     * Get an existing EdgeDeploymentServiceBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgeDeploymentServiceBackendState, opts?: pulumi.CustomResourceOptions): EdgeDeploymentServiceBackend;
    /**
     * Returns true if the given object is an instance of EdgeDeploymentServiceBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EdgeDeploymentServiceBackend;
    readonly edgeDeploymentServiceBackendId: pulumi.Output<string>;
    /**
     * Currently active version of the VCL service. Required to run to sync the VCL services origins to the NGWAF service
     */
    readonly fastlyServiceVclActiveVersion: pulumi.Output<number>;
    /**
     * Fastly service ID
     */
    readonly fastlySid: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * Create a EdgeDeploymentServiceBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeDeploymentServiceBackendArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EdgeDeploymentServiceBackend resources.
 */
export interface EdgeDeploymentServiceBackendState {
    edgeDeploymentServiceBackendId?: pulumi.Input<string>;
    /**
     * Currently active version of the VCL service. Required to run to sync the VCL services origins to the NGWAF service
     */
    fastlyServiceVclActiveVersion?: pulumi.Input<number>;
    /**
     * Fastly service ID
     */
    fastlySid?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EdgeDeploymentServiceBackend resource.
 */
export interface EdgeDeploymentServiceBackendArgs {
    edgeDeploymentServiceBackendId?: pulumi.Input<string>;
    /**
     * Currently active version of the VCL service. Required to run to sync the VCL services origins to the NGWAF service
     */
    fastlyServiceVclActiveVersion: pulumi.Input<number>;
    /**
     * Fastly service ID
     */
    fastlySid: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
}
