import * as pulumi from "@pulumi/pulumi";
export declare class CorpList extends pulumi.CustomResource {
    /**
     * Get an existing CorpList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpListState, opts?: pulumi.CustomResourceOptions): CorpList;
    /**
     * Returns true if the given object is an instance of CorpList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CorpList;
    readonly corpListId: pulumi.Output<string>;
    /**
     * Optional list description
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * List entries
     */
    readonly entries: pulumi.Output<string[]>;
    /**
     * Descriptive list name
     */
    readonly name: pulumi.Output<string>;
    /**
     * List types (string, ip, country, wildcard, signal)
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a CorpList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CorpList resources.
 */
export interface CorpListState {
    corpListId?: pulumi.Input<string>;
    /**
     * Optional list description
     */
    description?: pulumi.Input<string>;
    /**
     * List entries
     */
    entries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Descriptive list name
     */
    name?: pulumi.Input<string>;
    /**
     * List types (string, ip, country, wildcard, signal)
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CorpList resource.
 */
export interface CorpListArgs {
    corpListId?: pulumi.Input<string>;
    /**
     * Optional list description
     */
    description?: pulumi.Input<string>;
    /**
     * List entries
     */
    entries: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Descriptive list name
     */
    name?: pulumi.Input<string>;
    /**
     * List types (string, ip, country, wildcard, signal)
     */
    type: pulumi.Input<string>;
}
