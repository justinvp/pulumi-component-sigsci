import * as pulumi from "@pulumi/pulumi";
export declare class SiteAlert extends pulumi.CustomResource {
    /**
     * Get an existing SiteAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteAlertState, opts?: pulumi.CustomResourceOptions): SiteAlert;
    /**
     * Returns true if the given object is an instance of SiteAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteAlert;
    /**
     * A flag that describes what happens when the alert is triggered. 'info' creates an incident in the dashboard. 'flagged'
     * creates an incident and blocks traffic for 24 hours. Must be info or flagged.
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
     * The number of minutes of past traffic to examine. Must be 1, 10 or 60.
     */
    readonly interval: pulumi.Output<number>;
    /**
     * description
     */
    readonly longName: pulumi.Output<string | undefined>;
    readonly siteAlertId: pulumi.Output<string>;
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
     * The number of occurrences of the tag in the interval needed to trigger the alert. Min 1, Max 10000
     */
    readonly threshold: pulumi.Output<number>;
    /**
     * Create a SiteAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteAlert resources.
 */
export interface SiteAlertState {
    /**
     * A flag that describes what happens when the alert is triggered. 'info' creates an incident in the dashboard. 'flagged'
     * creates an incident and blocks traffic for 24 hours. Must be info or flagged.
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
     * The number of minutes of past traffic to examine. Must be 1, 10 or 60.
     */
    interval?: pulumi.Input<number>;
    /**
     * description
     */
    longName?: pulumi.Input<string>;
    siteAlertId?: pulumi.Input<string>;
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
     * The number of occurrences of the tag in the interval needed to trigger the alert. Min 1, Max 10000
     */
    threshold?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a SiteAlert resource.
 */
export interface SiteAlertArgs {
    /**
     * A flag that describes what happens when the alert is triggered. 'info' creates an incident in the dashboard. 'flagged'
     * creates an incident and blocks traffic for 24 hours. Must be info or flagged.
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
     * The number of minutes of past traffic to examine. Must be 1, 10 or 60.
     */
    interval: pulumi.Input<number>;
    /**
     * description
     */
    longName?: pulumi.Input<string>;
    siteAlertId?: pulumi.Input<string>;
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
     * The number of occurrences of the tag in the interval needed to trigger the alert. Min 1, Max 10000
     */
    threshold: pulumi.Input<number>;
}
