import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SiteIntegration extends pulumi.CustomResource {
    /**
     * Get an existing SiteIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteIntegrationState, opts?: pulumi.CustomResourceOptions): SiteIntegration;
    /**
     * Returns true if the given object is an instance of SiteIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteIntegration;
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    readonly events: pulumi.Output<string[] | undefined>;
    readonly fields: pulumi.Output<outputs.SiteIntegrationField[] | undefined>;
    /**
     * name
     */
    readonly name: pulumi.Output<string>;
    readonly siteIntegrationId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * One of (mailingList, slack, datadog, generic, pagerduty, microsoftTeams, microsoftTeamsWorkflow, jira, opsgenie,
     * victorops, pivotaltracker)
     */
    readonly type: pulumi.Output<string>;
    /**
     * Integration URL
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a SiteIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteIntegrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteIntegration resources.
 */
export interface SiteIntegrationState {
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    fields?: pulumi.Input<pulumi.Input<inputs.SiteIntegrationField>[]>;
    /**
     * name
     */
    name?: pulumi.Input<string>;
    siteIntegrationId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    /**
     * One of (mailingList, slack, datadog, generic, pagerduty, microsoftTeams, microsoftTeamsWorkflow, jira, opsgenie,
     * victorops, pivotaltracker)
     */
    type?: pulumi.Input<string>;
    /**
     * Integration URL
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteIntegration resource.
 */
export interface SiteIntegrationArgs {
    /**
     * Array of event types. Visit https://docs.fastly.com/signalsciences/integrations to find out which events the service you
     * are connecting allows.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    fields?: pulumi.Input<pulumi.Input<inputs.SiteIntegrationField>[]>;
    siteIntegrationId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    /**
     * One of (mailingList, slack, datadog, generic, pagerduty, microsoftTeams, microsoftTeamsWorkflow, jira, opsgenie,
     * victorops, pivotaltracker)
     */
    type: pulumi.Input<string>;
    /**
     * Integration URL
     */
    url: pulumi.Input<string>;
}
