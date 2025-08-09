import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SiteRule extends pulumi.CustomResource {
    /**
     * Get an existing SiteRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteRuleState, opts?: pulumi.CustomResourceOptions): SiteRule;
    /**
     * Returns true if the given object is an instance of SiteRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteRule;
    /**
     * Actions
     */
    readonly actions: pulumi.Output<outputs.SiteRuleAction[] | undefined>;
    /**
     * Conditions
     */
    readonly conditions: pulumi.Output<outputs.SiteRuleCondition[]>;
    /**
     * enable the rule
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * Date the rule will automatically be disabled. If rule is always enabled, will return empty string
     */
    readonly expiration: pulumi.Output<string>;
    /**
     * Conditions that must be matched when evaluating the request (all, any)
     */
    readonly groupOperator: pulumi.Output<string>;
    /**
     * Rate Limit
     */
    readonly rateLimit: pulumi.Output<outputs.SiteRuleRateLimit | undefined>;
    /**
     * Description of the rule
     */
    readonly reason: pulumi.Output<string>;
    /**
     * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none).
     * This field is only available for rules of type `request`. Not valid for `signal` or `rateLimit`.
     */
    readonly requestlogging: pulumi.Output<string | undefined>;
    /**
     * The signal id of the signal being excluded
     */
    readonly signal: pulumi.Output<string | undefined>;
    readonly siteRuleId: pulumi.Output<string>;
    /**
     * Site short name
     */
    readonly siteShortName: pulumi.Output<string>;
    /**
     * Type of rule (request, signal, rateLimit)
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SiteRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SiteRule resources.
 */
export interface SiteRuleState {
    /**
     * Actions
     */
    actions?: pulumi.Input<pulumi.Input<inputs.SiteRuleAction>[]>;
    /**
     * Conditions
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.SiteRuleCondition>[]>;
    /**
     * enable the rule
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Date the rule will automatically be disabled. If rule is always enabled, will return empty string
     */
    expiration?: pulumi.Input<string>;
    /**
     * Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * Rate Limit
     */
    rateLimit?: pulumi.Input<inputs.SiteRuleRateLimit>;
    /**
     * Description of the rule
     */
    reason?: pulumi.Input<string>;
    /**
     * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none).
     * This field is only available for rules of type `request`. Not valid for `signal` or `rateLimit`.
     */
    requestlogging?: pulumi.Input<string>;
    /**
     * The signal id of the signal being excluded
     */
    signal?: pulumi.Input<string>;
    siteRuleId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName?: pulumi.Input<string>;
    /**
     * Type of rule (request, signal, rateLimit)
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SiteRule resource.
 */
export interface SiteRuleArgs {
    /**
     * Actions
     */
    actions?: pulumi.Input<pulumi.Input<inputs.SiteRuleAction>[]>;
    /**
     * Conditions
     */
    conditions: pulumi.Input<pulumi.Input<inputs.SiteRuleCondition>[]>;
    /**
     * enable the rule
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Date the rule will automatically be disabled. If rule is always enabled, will return empty string
     */
    expiration: pulumi.Input<string>;
    /**
     * Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator: pulumi.Input<string>;
    /**
     * Rate Limit
     */
    rateLimit?: pulumi.Input<inputs.SiteRuleRateLimit>;
    /**
     * Description of the rule
     */
    reason: pulumi.Input<string>;
    /**
     * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none).
     * This field is only available for rules of type `request`. Not valid for `signal` or `rateLimit`.
     */
    requestlogging?: pulumi.Input<string>;
    /**
     * The signal id of the signal being excluded
     */
    signal?: pulumi.Input<string>;
    siteRuleId?: pulumi.Input<string>;
    /**
     * Site short name
     */
    siteShortName: pulumi.Input<string>;
    /**
     * Type of rule (request, signal, rateLimit)
     */
    type: pulumi.Input<string>;
}
