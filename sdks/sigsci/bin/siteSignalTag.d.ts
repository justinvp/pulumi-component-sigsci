import * as pulumi from "@pulumi/pulumi";
export declare class SiteSignalTag extends pulumi.CustomResource {
    /**
     * Get an existing SiteSignalTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteSignalTagState, opts?: pulumi.CustomResourceOptions): SiteSignalTag;
    /**
     * Returns true if the given object is an instance of SiteSignalTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteSignalTag;
    /**
     * configurable
     */
    readonly configurable: pulumi.Output<boolean>;
    /**
     * description
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * informational
     */
    readonly informational: pulumi.Output<boolean>;
    /**
     * The display name of the signal tag. Must be 3-25 char.
     */
    readonly name: pulumi.Output<string>;
    /**
     * need response
     */
    readonly needsResponse: pulumi.Output<boolean>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    readonly siteSignalTagId: pulumi.Output<string>;
    /**
     * Create a SiteSignalTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteSignalTagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteSignalTag resources.
 */
export interface SiteSignalTagState {
    /**
     * configurable
     */
    configurable?: pulumi.Input<boolean>;
    /**
     * description
     */
    description?: pulumi.Input<string>;
    /**
     * informational
     */
    informational?: pulumi.Input<boolean>;
    /**
     * The display name of the signal tag. Must be 3-25 char.
     */
    name?: pulumi.Input<string>;
    /**
     * need response
     */
    needsResponse?: pulumi.Input<boolean>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    siteSignalTagId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteSignalTag resource.
 */
export interface SiteSignalTagArgs {
    /**
     * description
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the signal tag. Must be 3-25 char.
     */
    name?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    siteSignalTagId?: pulumi.Input<string>;
}
