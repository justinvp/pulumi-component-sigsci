import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class CorpCloudwafInstance extends pulumi.CustomResource {
    /**
     * Get an existing CorpCloudwafInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CorpCloudwafInstanceState, opts?: pulumi.CustomResourceOptions): CorpCloudwafInstance;
    /**
     * Returns true if the given object is an instance of CorpCloudwafInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CorpCloudwafInstance;
    readonly corpCloudwafInstanceId: pulumi.Output<string>;
    /**
     * The sites primary Agent key
     */
    readonly deployments: pulumi.Output<outputs.CorpCloudwafInstanceDeployment[]>;
    /**
     * Friendly description to identify a CloudWAF instance.
     */
    readonly description: pulumi.Output<string>;
    /**
     * Friendly name to identify a CloudWAF instance.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Region the CloudWAF Instance is being deployed to. (Supported region: "us-east-1", "us-west-1", "af-south-1",
     * "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1",
     * "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "sa-east-1", "us-east-2", "us-west-2").
     */
    readonly region: pulumi.Output<string>;
    /**
     * TLS minimum version. Versions Available: "1.0", "1.2".
     */
    readonly tlsMinVersion: pulumi.Output<string>;
    readonly useUploadedCertificates: pulumi.Output<boolean>;
    /**
     * Workspace Configs
     */
    readonly workspaceConfigs: pulumi.Output<outputs.CorpCloudwafInstanceWorkspaceConfig[]>;
    /**
     * Create a CorpCloudwafInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CorpCloudwafInstanceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CorpCloudwafInstance resources.
 */
export interface CorpCloudwafInstanceState {
    corpCloudwafInstanceId?: pulumi.Input<string>;
    /**
     * The sites primary Agent key
     */
    deployments?: pulumi.Input<pulumi.Input<inputs.CorpCloudwafInstanceDeployment>[]>;
    /**
     * Friendly description to identify a CloudWAF instance.
     */
    description?: pulumi.Input<string>;
    /**
     * Friendly name to identify a CloudWAF instance.
     */
    name?: pulumi.Input<string>;
    /**
     * Region the CloudWAF Instance is being deployed to. (Supported region: "us-east-1", "us-west-1", "af-south-1",
     * "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1",
     * "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "sa-east-1", "us-east-2", "us-west-2").
     */
    region?: pulumi.Input<string>;
    /**
     * TLS minimum version. Versions Available: "1.0", "1.2".
     */
    tlsMinVersion?: pulumi.Input<string>;
    useUploadedCertificates?: pulumi.Input<boolean>;
    /**
     * Workspace Configs
     */
    workspaceConfigs?: pulumi.Input<pulumi.Input<inputs.CorpCloudwafInstanceWorkspaceConfig>[]>;
}
/**
 * The set of arguments for constructing a CorpCloudwafInstance resource.
 */
export interface CorpCloudwafInstanceArgs {
    corpCloudwafInstanceId?: pulumi.Input<string>;
    /**
     * Friendly description to identify a CloudWAF instance.
     */
    description: pulumi.Input<string>;
    /**
     * Friendly name to identify a CloudWAF instance.
     */
    name?: pulumi.Input<string>;
    /**
     * Region the CloudWAF Instance is being deployed to. (Supported region: "us-east-1", "us-west-1", "af-south-1",
     * "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1",
     * "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "sa-east-1", "us-east-2", "us-west-2").
     */
    region: pulumi.Input<string>;
    /**
     * TLS minimum version. Versions Available: "1.0", "1.2".
     */
    tlsMinVersion: pulumi.Input<string>;
    useUploadedCertificates: pulumi.Input<boolean>;
    /**
     * Workspace Configs
     */
    workspaceConfigs: pulumi.Input<pulumi.Input<inputs.CorpCloudwafInstanceWorkspaceConfig>[]>;
}
