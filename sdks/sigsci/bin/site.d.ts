import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Site extends pulumi.CustomResource {
    /**
     * Get an existing Site resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteState, opts?: pulumi.CustomResourceOptions): Site;
    /**
     * Returns true if the given object is an instance of Site.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Site;
    /**
     * Agent IP anonymization mode - "" (empty string) or 'EU'
     */
    readonly agentAnonMode: pulumi.Output<string | undefined>;
    /**
     * Agent action level - 'block', 'log' or 'off'
     */
    readonly agentLevel: pulumi.Output<string | undefined>;
    /**
     * List entries
     */
    readonly attackThresholds: pulumi.Output<outputs.SiteAttackThreshold[] | undefined>;
    /**
     * Duration to block an IP in seconds
     */
    readonly blockDurationSeconds: pulumi.Output<number | undefined>;
    /**
     * HTTP response code to send when traffic is being blocked
     */
    readonly blockHttpCode: pulumi.Output<number | undefined>;
    /**
     * URL to redirect to when blocking with a '301' or '302' HTTP status code
     */
    readonly blockRedirectUrl: pulumi.Output<string | undefined>;
    /**
     * Headers used for assigning client IPs to requests
     */
    readonly clientIpRules: pulumi.Output<string[] | undefined>;
    /**
     * Display name of the site
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Immediately block requests that contain attack signals
     */
    readonly immediateBlock: pulumi.Output<boolean | undefined>;
    /**
     * The sites primary Agent key
     */
    readonly primaryAgentKey: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Identifying name of the site
     */
    readonly shortName: pulumi.Output<string>;
    readonly siteId: pulumi.Output<string>;
    /**
     * Create a Site resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Site resources.
 */
export interface SiteState {
    /**
     * Agent IP anonymization mode - "" (empty string) or 'EU'
     */
    agentAnonMode?: pulumi.Input<string>;
    /**
     * Agent action level - 'block', 'log' or 'off'
     */
    agentLevel?: pulumi.Input<string>;
    /**
     * List entries
     */
    attackThresholds?: pulumi.Input<pulumi.Input<inputs.SiteAttackThreshold>[]>;
    /**
     * Duration to block an IP in seconds
     */
    blockDurationSeconds?: pulumi.Input<number>;
    /**
     * HTTP response code to send when traffic is being blocked
     */
    blockHttpCode?: pulumi.Input<number>;
    /**
     * URL to redirect to when blocking with a '301' or '302' HTTP status code
     */
    blockRedirectUrl?: pulumi.Input<string>;
    /**
     * Headers used for assigning client IPs to requests
     */
    clientIpRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display name of the site
     */
    displayName?: pulumi.Input<string>;
    /**
     * Immediately block requests that contain attack signals
     */
    immediateBlock?: pulumi.Input<boolean>;
    /**
     * The sites primary Agent key
     */
    primaryAgentKey?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Identifying name of the site
     */
    shortName?: pulumi.Input<string>;
    siteId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Site resource.
 */
export interface SiteArgs {
    /**
     * Agent IP anonymization mode - "" (empty string) or 'EU'
     */
    agentAnonMode?: pulumi.Input<string>;
    /**
     * Agent action level - 'block', 'log' or 'off'
     */
    agentLevel?: pulumi.Input<string>;
    /**
     * List entries
     */
    attackThresholds?: pulumi.Input<pulumi.Input<inputs.SiteAttackThreshold>[]>;
    /**
     * Duration to block an IP in seconds
     */
    blockDurationSeconds?: pulumi.Input<number>;
    /**
     * HTTP response code to send when traffic is being blocked
     */
    blockHttpCode?: pulumi.Input<number>;
    /**
     * URL to redirect to when blocking with a '301' or '302' HTTP status code
     */
    blockRedirectUrl?: pulumi.Input<string>;
    /**
     * Headers used for assigning client IPs to requests
     */
    clientIpRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display name of the site
     */
    displayName: pulumi.Input<string>;
    /**
     * Immediately block requests that contain attack signals
     */
    immediateBlock?: pulumi.Input<boolean>;
    /**
     * Identifying name of the site
     */
    shortName: pulumi.Input<string>;
    siteId?: pulumi.Input<string>;
}
