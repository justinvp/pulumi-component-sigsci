import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class CorpRule extends pulumi.CustomResource {
    /**
     * Get an existing CorpRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpRuleState, opts?: pulumi.CustomResourceOptions): CorpRule;
    /**
     * Returns true if the given object is an instance of CorpRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CorpRule;
    /**
     * Actions
     */
    readonly actions: pulumi.Output<outputs.CorpRuleAction[]>;
    /**
     * Conditions
     */
    readonly conditions: pulumi.Output<outputs.CorpRuleCondition[]>;
    readonly corpRuleId: pulumi.Output<string>;
    /**
     * Whether the rule is applied to all sites or to specific sites. (global, specificSites)
     */
    readonly corpScope: pulumi.Output<string>;
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
     * Description of the rule
     */
    readonly reason: pulumi.Output<string>;
    /**
     * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none).
     * This field is only available for rules of type `request`. Not valid for `signal`.
     */
    readonly requestlogging: pulumi.Output<string | undefined>;
    /**
     * The signal id of the signal being excluded
     */
    readonly signal: pulumi.Output<string | undefined>;
    /**
     * Sites with the rule available. Rules with a global corpScope will return '[]'.
     */
    readonly siteShortNames: pulumi.Output<string[] | undefined>;
    /**
     * Type of rule (request, signal)
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a CorpRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CorpRule resources.
 */
export interface CorpRuleState {
    /**
     * Actions
     */
    actions?: pulumi.Input<pulumi.Input<inputs.CorpRuleAction>[]>;
    /**
     * Conditions
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.CorpRuleCondition>[]>;
    corpRuleId?: pulumi.Input<string>;
    /**
     * Whether the rule is applied to all sites or to specific sites. (global, specificSites)
     */
    corpScope?: pulumi.Input<string>;
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
     * Description of the rule
     */
    reason?: pulumi.Input<string>;
    /**
     * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none).
     * This field is only available for rules of type `request`. Not valid for `signal`.
     */
    requestlogging?: pulumi.Input<string>;
    /**
     * The signal id of the signal being excluded
     */
    signal?: pulumi.Input<string>;
    /**
     * Sites with the rule available. Rules with a global corpScope will return '[]'.
     */
    siteShortNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of rule (request, signal)
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CorpRule resource.
 */
export interface CorpRuleArgs {
    /**
     * Actions
     */
    actions: pulumi.Input<pulumi.Input<inputs.CorpRuleAction>[]>;
    /**
     * Conditions
     */
    conditions: pulumi.Input<pulumi.Input<inputs.CorpRuleCondition>[]>;
    corpRuleId?: pulumi.Input<string>;
    /**
     * Whether the rule is applied to all sites or to specific sites. (global, specificSites)
     */
    corpScope: pulumi.Input<string>;
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
     * Description of the rule
     */
    reason: pulumi.Input<string>;
    /**
     * Indicates whether to store the logs for requests that match the rule's conditions (sampled) or not store them (none).
     * This field is only available for rules of type `request`. Not valid for `signal`.
     */
    requestlogging?: pulumi.Input<string>;
    /**
     * The signal id of the signal being excluded
     */
    signal?: pulumi.Input<string>;
    /**
     * Sites with the rule available. Rules with a global corpScope will return '[]'.
     */
    siteShortNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of rule (request, signal)
     */
    type: pulumi.Input<string>;
}
