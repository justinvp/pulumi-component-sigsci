import * as pulumi from "@pulumi/pulumi";
export declare class CorpIntegration extends pulumi.CustomResource {
    /**
     * Get an existing CorpIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpIntegrationState, opts?: pulumi.CustomResourceOptions): CorpIntegration;
    /**
     * Returns true if the given object is an instance of CorpIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CorpIntegration;
    readonly corpIntegrationId: pulumi.Output<string>;
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    readonly events: pulumi.Output<string[] | undefined>;
    /**
     * name
     */
    readonly name: pulumi.Output<string>;
    /**
     * One of (mailingList, slack, microsoftTeams, microsoftTeamsWorkflow)
     */
    readonly type: pulumi.Output<string>;
    /**
     * Integration URL
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a CorpIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpIntegrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CorpIntegration resources.
 */
export interface CorpIntegrationState {
    corpIntegrationId?: pulumi.Input<string>;
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    /**
     * One of (mailingList, slack, microsoftTeams, microsoftTeamsWorkflow)
     */
    type?: pulumi.Input<string>;
    /**
     * Integration URL
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CorpIntegration resource.
 */
export interface CorpIntegrationArgs {
    corpIntegrationId?: pulumi.Input<string>;
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One of (mailingList, slack, microsoftTeams, microsoftTeamsWorkflow)
     */
    type: pulumi.Input<string>;
    /**
     * Integration URL
     */
    url: pulumi.Input<string>;
}
