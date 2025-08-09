import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SiteTemplatedRule extends pulumi.CustomResource {
    /**
     * Get an existing SiteTemplatedRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteTemplatedRuleState, opts?: pulumi.CustomResourceOptions): SiteTemplatedRule;
    /**
     * Returns true if the given object is an instance of SiteTemplatedRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteTemplatedRule;
    /**
     * Alerts
     */
    readonly alerts: pulumi.Output<outputs.SiteTemplatedRuleAlert[] | undefined>;
    /**
     * description
     */
    readonly detections: pulumi.Output<outputs.SiteTemplatedRuleDetection[]>;
    /**
     * Name of templated rule. This must match an existing templated rule e.g., LOGINATTEMPT, CMDEXE, XSS...
     */
    readonly name: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    readonly siteTemplatedRuleId: pulumi.Output<string>;
    /**
     * Create a SiteTemplatedRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteTemplatedRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteTemplatedRule resources.
 */
export interface SiteTemplatedRuleState {
    /**
     * Alerts
     */
    alerts?: pulumi.Input<pulumi.Input<inputs.SiteTemplatedRuleAlert>[]>;
    /**
     * description
     */
    detections?: pulumi.Input<pulumi.Input<inputs.SiteTemplatedRuleDetection>[]>;
    /**
     * Name of templated rule. This must match an existing templated rule e.g., LOGINATTEMPT, CMDEXE, XSS...
     */
    name?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    siteTemplatedRuleId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteTemplatedRule resource.
 */
export interface SiteTemplatedRuleArgs {
    /**
     * Alerts
     */
    alerts?: pulumi.Input<pulumi.Input<inputs.SiteTemplatedRuleAlert>[]>;
    /**
     * description
     */
    detections: pulumi.Input<pulumi.Input<inputs.SiteTemplatedRuleDetection>[]>;
    /**
     * Name of templated rule. This must match an existing templated rule e.g., LOGINATTEMPT, CMDEXE, XSS...
     */
    name?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    siteTemplatedRuleId?: pulumi.Input<string>;
}
