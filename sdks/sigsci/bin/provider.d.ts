import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the sigsci package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * URL override for testing
     */
    readonly apiUrl: pulumi.Output<string | undefined>;
    /**
     * The token used for authentication specify either the password or the token
     */
    readonly authToken: pulumi.Output<string | undefined>;
    /**
     * Corp short name (id)
     */
    readonly corp: pulumi.Output<string>;
    /**
     * The email to be used for authentication
     */
    readonly email: pulumi.Output<string>;
    /**
     * The Fastly API key used for deploying Signal Sciences as a Fastly edge security service. For edge deployment service
     * calls, the Fastly key must have write access to the given service.
     */
    readonly fastlyApiKey: pulumi.Output<string | undefined>;
    /**
     * The password used to for authentication specify either the password or the token
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * URL override for testing
     */
    apiUrl?: pulumi.Input<string>;
    /**
     * The token used for authentication specify either the password or the token
     */
    authToken?: pulumi.Input<string>;
    /**
     * Corp short name (id)
     */
    corp: pulumi.Input<string>;
    /**
     * The email to be used for authentication
     */
    email: pulumi.Input<string>;
    /**
     * The Fastly API key used for deploying Signal Sciences as a Fastly edge security service. For edge deployment service
     * calls, the Fastly key must have write access to the given service.
     */
    fastlyApiKey?: pulumi.Input<string>;
    /**
     * The password used to for authentication specify either the password or the token
     */
    password?: pulumi.Input<string>;
    /**
     * Enable validation of API credentials during provider initialization. Default is true.
     */
    validate?: pulumi.Input<boolean>;
}
