import * as pulumi from "@pulumi/pulumi";
export declare class SiteBlocklist extends pulumi.CustomResource {
    /**
     * Get an existing SiteBlocklist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteBlocklistState, opts?: pulumi.CustomResourceOptions): SiteBlocklist;
    /**
     * Returns true if the given object is an instance of SiteBlocklist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteBlocklist;
    /**
     * Optional RFC3339-formatted datetime in the future. Omit this paramater if it does not expire.
     */
    readonly expires: pulumi.Output<string | undefined>;
    /**
     * Note/Description associated with the tag.
     */
    readonly note: pulumi.Output<string>;
    readonly siteBlocklistId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * Source IP Address to Blocklist
     */
    readonly source: pulumi.Output<string>;
    /**
     * Create a SiteBlocklist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteBlocklistArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteBlocklist resources.
 */
export interface SiteBlocklistState {
    /**
     * Optional RFC3339-formatted datetime in the future. Omit this paramater if it does not expire.
     */
    expires?: pulumi.Input<string>;
    /**
     * Note/Description associated with the tag.
     */
    note?: pulumi.Input<string>;
    siteBlocklistId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    /**
     * Source IP Address to Blocklist
     */
    source?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteBlocklist resource.
 */
export interface SiteBlocklistArgs {
    /**
     * Optional RFC3339-formatted datetime in the future. Omit this paramater if it does not expire.
     */
    expires?: pulumi.Input<string>;
    /**
     * Note/Description associated with the tag.
     */
    note: pulumi.Input<string>;
    siteBlocklistId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    /**
     * Source IP Address to Blocklist
     */
    source: pulumi.Input<string>;
}
