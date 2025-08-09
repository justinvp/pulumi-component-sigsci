import * as pulumi from "@pulumi/pulumi";
export declare class CorpSignalTag extends pulumi.CustomResource {
    /**
     * Get an existing CorpSignalTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpSignalTagState, opts?: pulumi.CustomResourceOptions): CorpSignalTag;
    /**
     * Returns true if the given object is an instance of CorpSignalTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CorpSignalTag;
    /**
     * configurable
     */
    readonly configurable: pulumi.Output<boolean>;
    readonly corpSignalTagId: pulumi.Output<string>;
    /**
     * Optional signal tag description
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * informational
     */
    readonly informational: pulumi.Output<boolean>;
    /**
     * need response
     */
    readonly needsResponse: pulumi.Output<boolean>;
    /**
     * The display name of the signal tag. Must be 3-25 char.
     */
    readonly shortName: pulumi.Output<string>;
    /**
     * Create a CorpSignalTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpSignalTagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CorpSignalTag resources.
 */
export interface CorpSignalTagState {
    /**
     * configurable
     */
    configurable?: pulumi.Input<boolean>;
    corpSignalTagId?: pulumi.Input<string>;
    /**
     * Optional signal tag description
     */
    description?: pulumi.Input<string>;
    /**
     * informational
     */
    informational?: pulumi.Input<boolean>;
    /**
     * need response
     */
    needsResponse?: pulumi.Input<boolean>;
    /**
     * The display name of the signal tag. Must be 3-25 char.
     */
    shortName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CorpSignalTag resource.
 */
export interface CorpSignalTagArgs {
    corpSignalTagId?: pulumi.Input<string>;
    /**
     * Optional signal tag description
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the signal tag. Must be 3-25 char.
     */
    shortName: pulumi.Input<string>;
}
