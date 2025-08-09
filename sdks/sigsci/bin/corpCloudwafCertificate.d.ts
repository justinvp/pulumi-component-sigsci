import * as pulumi from "@pulumi/pulumi";
export declare class CorpCloudwafCertificate extends pulumi.CustomResource {
    /**
     * Get an existing CorpCloudwafCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpCloudwafCertificateState, opts?: pulumi.CustomResourceOptions): CorpCloudwafCertificate;
    /**
     * Returns true if the given object is an instance of CorpCloudwafCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CorpCloudwafCertificate;
    /**
     * Body of the certificate in PEM format
     */
    readonly certificateBody: pulumi.Output<string>;
    /**
     * Certificate chain in PEM format
     */
    readonly certificateChain: pulumi.Output<string | undefined>;
    /**
     * Common name of the uploaded certificate
     */
    readonly commonName: pulumi.Output<string>;
    readonly corpCloudwafCertificateId: pulumi.Output<string>;
    /**
     * TimeStamp for when certificate expires in RFC3339 date time format
     */
    readonly expiresAt: pulumi.Output<string>;
    /**
     * SHA1 fingerprint of the certififcate
     */
    readonly fingerprint: pulumi.Output<string>;
    /**
     * Friendly name to identify a CloudWAF certificate
     */
    readonly name: pulumi.Output<string>;
    /**
     * Private key of the certificate in PEM format - must be unencrypted
     */
    readonly privateKey: pulumi.Output<string>;
    /**
     * Current status of the certificate - could be one of "unknown", "active", "pendingverification", "expired", "error"
     */
    readonly status: pulumi.Output<string>;
    /**
     * Subject alternative names from the uploaded certificate
     */
    readonly subjectAlternativeNames: pulumi.Output<string[]>;
    /**
     * Create a CorpCloudwafCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpCloudwafCertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CorpCloudwafCertificate resources.
 */
export interface CorpCloudwafCertificateState {
    /**
     * Body of the certificate in PEM format
     */
    certificateBody?: pulumi.Input<string>;
    /**
     * Certificate chain in PEM format
     */
    certificateChain?: pulumi.Input<string>;
    /**
     * Common name of the uploaded certificate
     */
    commonName?: pulumi.Input<string>;
    corpCloudwafCertificateId?: pulumi.Input<string>;
    /**
     * TimeStamp for when certificate expires in RFC3339 date time format
     */
    expiresAt?: pulumi.Input<string>;
    /**
     * SHA1 fingerprint of the certififcate
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * Friendly name to identify a CloudWAF certificate
     */
    name?: pulumi.Input<string>;
    /**
     * Private key of the certificate in PEM format - must be unencrypted
     */
    privateKey?: pulumi.Input<string>;
    /**
     * Current status of the certificate - could be one of "unknown", "active", "pendingverification", "expired", "error"
     */
    status?: pulumi.Input<string>;
    /**
     * Subject alternative names from the uploaded certificate
     */
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a CorpCloudwafCertificate resource.
 */
export interface CorpCloudwafCertificateArgs {
    /**
     * Body of the certificate in PEM format
     */
    certificateBody: pulumi.Input<string>;
    /**
     * Certificate chain in PEM format
     */
    certificateChain?: pulumi.Input<string>;
    corpCloudwafCertificateId?: pulumi.Input<string>;
    /**
     * Friendly name to identify a CloudWAF certificate
     */
    name?: pulumi.Input<string>;
    /**
     * Private key of the certificate in PEM format - must be unencrypted
     */
    privateKey: pulumi.Input<string>;
}
