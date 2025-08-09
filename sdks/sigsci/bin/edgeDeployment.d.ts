import * as pulumi from "@pulumi/pulumi";
export declare class EdgeDeployment extends pulumi.CustomResource {
    /**
     * Get an existing EdgeDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgeDeploymentState, opts?: pulumi.CustomResourceOptions): EdgeDeployment;
    /**
     * Returns true if the given object is an instance of EdgeDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EdgeDeployment;
    /**
     * List of Compute services. This field is only required if you are linking Compute services to the Next-Gen WAF.
     */
    readonly authorizedServices: pulumi.Output<string[] | undefined>;
    readonly edgeDeploymentId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * Create a EdgeDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeDeploymentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EdgeDeployment resources.
 */
export interface EdgeDeploymentState {
    /**
     * List of Compute services. This field is only required if you are linking Compute services to the Next-Gen WAF.
     */
    authorizedServices?: pulumi.Input<pulumi.Input<string>[]>;
    edgeDeploymentId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EdgeDeployment resource.
 */
export interface EdgeDeploymentArgs {
    /**
     * List of Compute services. This field is only required if you are linking Compute services to the Next-Gen WAF.
     */
    authorizedServices?: pulumi.Input<pulumi.Input<string>[]>;
    edgeDeploymentId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
}
