import * as pulumi from "@pulumi/pulumi";
export declare class SiteAllowlist extends pulumi.CustomResource {
    /**
     * Get an existing SiteAllowlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteAllowlistState, opts?: pulumi.CustomResourceOptions): SiteAllowlist;
    /**
     * Returns true if the given object is an instance of SiteAllowlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteAllowlist;
    /**
     * Optional RFC3339-formatted datetime in the future. Omit this paramater if it does not expire.
     */
    readonly expires: pulumi.Output<string | undefined>;
    /**
     * Note/Description associated with the tag.
     */
    readonly note: pulumi.Output<string>;
    readonly siteAllowlistId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * Source IP Address to allowlist
     */
    readonly source: pulumi.Output<string>;
    /**
     * Create a SiteAllowlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteAllowlistArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteAllowlist resources.
 */
export interface SiteAllowlistState {
    /**
     * Optional RFC3339-formatted datetime in the future. Omit this paramater if it does not expire.
     */
    expires?: pulumi.Input<string>;
    /**
     * Note/Description associated with the tag.
     */
    note?: pulumi.Input<string>;
    siteAllowlistId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    /**
     * Source IP Address to allowlist
     */
    source?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteAllowlist resource.
 */
export interface SiteAllowlistArgs {
    /**
     * Optional RFC3339-formatted datetime in the future. Omit this paramater if it does not expire.
     */
    expires?: pulumi.Input<string>;
    /**
     * Note/Description associated with the tag.
     */
    note: pulumi.Input<string>;
    siteAllowlistId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    /**
     * Source IP Address to allowlist
     */
    source: pulumi.Input<string>;
}
