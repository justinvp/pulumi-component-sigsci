import * as pulumi from "@pulumi/pulumi";
export declare class SiteAgentAlert extends pulumi.CustomResource {
    /**
     * Get an existing SiteAgentAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteAgentAlertState, opts?: pulumi.CustomResourceOptions): SiteAgentAlert;
    /**
     * Returns true if the given object is an instance of SiteAgentAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteAgentAlert;
    /**
     * Action for agent alert.
     */
    readonly action: pulumi.Output<string>;
    /**
     * The number of seconds this alert is active.
     */
    readonly blockDurationSeconds: pulumi.Output<number | undefined>;
    /**
     * A flag to toggle this alert.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Field_name for agent alert.
     */
    readonly fieldName: pulumi.Output<string>;
    /**
     * Integer value for interval. Must be 5, 10, or 60.
     */
    readonly interval: pulumi.Output<number>;
    /**
     * description
     */
    readonly longName: pulumi.Output<string | undefined>;
    /**
     * Operator for agent alert.
     */
    readonly operator: pulumi.Output<string>;
    readonly siteAgentAlertId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * A flag to skip notifications
     */
    readonly skipNotifications: pulumi.Output<boolean | undefined>;
    /**
     * The name of the tag whose occurrences the alert is watching. Must match an existing tag
     */
    readonly tagName: pulumi.Output<string>;
    /**
     * The number of occurrences of the tag in the interval needed to trigger the alert. Min 0, Max 3600000
     */
    readonly threshold: pulumi.Output<number>;
    /**
     * Create a SiteAgentAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteAgentAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteAgentAlert resources.
 */
export interface SiteAgentAlertState {
    /**
     * Action for agent alert.
     */
    action?: pulumi.Input<string>;
    /**
     * The number of seconds this alert is active.
     */
    blockDurationSeconds?: pulumi.Input<number>;
    /**
     * A flag to toggle this alert.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Field_name for agent alert.
     */
    fieldName?: pulumi.Input<string>;
    /**
     * Integer value for interval. Must be 5, 10, or 60.
     */
    interval?: pulumi.Input<number>;
    /**
     * description
     */
    longName?: pulumi.Input<string>;
    /**
     * Operator for agent alert.
     */
    operator?: pulumi.Input<string>;
    siteAgentAlertId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    /**
     * A flag to skip notifications
     */
    skipNotifications?: pulumi.Input<boolean>;
    /**
     * The name of the tag whose occurrences the alert is watching. Must match an existing tag
     */
    tagName?: pulumi.Input<string>;
    /**
     * The number of occurrences of the tag in the interval needed to trigger the alert. Min 0, Max 3600000
     */
    threshold?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a SiteAgentAlert resource.
 */
export interface SiteAgentAlertArgs {
    /**
     * Action for agent alert.
     */
    action: pulumi.Input<string>;
    /**
     * The number of seconds this alert is active.
     */
    blockDurationSeconds?: pulumi.Input<number>;
    /**
     * A flag to toggle this alert.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Field_name for agent alert.
     */
    fieldName: pulumi.Input<string>;
    /**
     * Integer value for interval. Must be 5, 10, or 60.
     */
    interval: pulumi.Input<number>;
    /**
     * description
     */
    longName?: pulumi.Input<string>;
    /**
     * Operator for agent alert.
     */
    operator: pulumi.Input<string>;
    siteAgentAlertId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    /**
     * A flag to skip notifications
     */
    skipNotifications?: pulumi.Input<boolean>;
    /**
     * The name of the tag whose occurrences the alert is watching. Must match an existing tag
     */
    tagName: pulumi.Input<string>;
    /**
     * The number of occurrences of the tag in the interval needed to trigger the alert. Min 0, Max 3600000
     */
    threshold: pulumi.Input<number>;
}
