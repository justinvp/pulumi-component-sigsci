import * as pulumi from "@pulumi/pulumi";
export declare class EdgeDeploymentService extends pulumi.CustomResource {
    /**
     * Get an existing EdgeDeploymentService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgeDeploymentServiceState, opts?: pulumi.CustomResourceOptions): EdgeDeploymentService;
    /**
     * Returns true if the given object is an instance of EdgeDeploymentService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EdgeDeploymentService;
    /**
     * activate Fastly service version after clone. Possible values are true or false. Defaults to true.
     */
    readonly activateVersion: pulumi.Output<boolean | undefined>;
    /**
     * enable to prevent Fastly-Client-IP from being overwritten by the NGWAF. Intended for advanced use cases. Defaults to
     * false.
     */
    readonly customClientIp: pulumi.Output<boolean | undefined>;
    readonly edgeDeploymentServiceId: pulumi.Output<string>;
    /**
     * Fastly service ID
     */
    readonly fastlySid: pulumi.Output<string>;
    /**
     * percentage of traffic to send to NGWAF@Edge. Possible values are integers values 0 to 100. Defaults to 0.
     */
    readonly percentEnabled: pulumi.Output<number | undefined>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * Create a EdgeDeploymentService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeDeploymentServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EdgeDeploymentService resources.
 */
export interface EdgeDeploymentServiceState {
    /**
     * activate Fastly service version after clone. Possible values are true or false. Defaults to true.
     */
    activateVersion?: pulumi.Input<boolean>;
    /**
     * enable to prevent Fastly-Client-IP from being overwritten by the NGWAF. Intended for advanced use cases. Defaults to
     * false.
     */
    customClientIp?: pulumi.Input<boolean>;
    edgeDeploymentServiceId?: pulumi.Input<string>;
    /**
     * Fastly service ID
     */
    fastlySid?: pulumi.Input<string>;
    /**
     * percentage of traffic to send to NGWAF@Edge. Possible values are integers values 0 to 100. Defaults to 0.
     */
    percentEnabled?: pulumi.Input<number>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EdgeDeploymentService resource.
 */
export interface EdgeDeploymentServiceArgs {
    /**
     * activate Fastly service version after clone. Possible values are true or false. Defaults to true.
     */
    activateVersion?: pulumi.Input<boolean>;
    /**
     * enable to prevent Fastly-Client-IP from being overwritten by the NGWAF. Intended for advanced use cases. Defaults to
     * false.
     */
    customClientIp?: pulumi.Input<boolean>;
    edgeDeploymentServiceId?: pulumi.Input<string>;
    /**
     * Fastly service ID
     */
    fastlySid: pulumi.Input<string>;
    /**
     * percentage of traffic to send to NGWAF@Edge. Possible values are integers values 0 to 100. Defaults to 0.
     */
    percentEnabled?: pulumi.Input<number>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
}
