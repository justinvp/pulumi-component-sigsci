import * as pulumi from "@pulumi/pulumi";
export declare class SiteHeaderLink extends pulumi.CustomResource {
    /**
     * Get an existing SiteHeaderLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteHeaderLinkState, opts?: pulumi.CustomResourceOptions): SiteHeaderLink;
    /**
     * Returns true if the given object is an instance of SiteHeaderLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteHeaderLink;
    /**
     * External link
     */
    readonly link: pulumi.Output<string>;
    /**
     * Name of header link for display purposes
     */
    readonly linkName: pulumi.Output<string | undefined>;
    /**
     * Descriptive list name
     */
    readonly name: pulumi.Output<string>;
    readonly siteHeaderLinkId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * The type of header, either 'request' or 'response'
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SiteHeaderLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteHeaderLinkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteHeaderLink resources.
 */
export interface SiteHeaderLinkState {
    /**
     * External link
     */
    link?: pulumi.Input<string>;
    /**
     * Name of header link for display purposes
     */
    linkName?: pulumi.Input<string>;
    /**
     * Descriptive list name
     */
    name?: pulumi.Input<string>;
    siteHeaderLinkId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    /**
     * The type of header, either 'request' or 'response'
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteHeaderLink resource.
 */
export interface SiteHeaderLinkArgs {
    /**
     * External link
     */
    link: pulumi.Input<string>;
    /**
     * Name of header link for display purposes
     */
    linkName?: pulumi.Input<string>;
    /**
     * Descriptive list name
     */
    name?: pulumi.Input<string>;
    siteHeaderLinkId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    /**
     * The type of header, either 'request' or 'response'
     */
    type: pulumi.Input<string>;
}
