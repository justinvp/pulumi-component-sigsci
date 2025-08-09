import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSites(args?: GetSitesArgs, opts?: pulumi.InvokeOptions): Promise<GetSitesResult>;
/**
 * A collection of arguments for invoking getSites.
 */
export interface GetSitesArgs {
    filter?: string;
    id?: string;
}
/**
 * A collection of values returned by getSites.
 */
export interface GetSitesResult {
    readonly filter?: string;
    readonly id: string;
    readonly sites: outputs.GetSitesSite[];
}
export declare function getSitesOutput(args?: GetSitesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSitesResult>;
/**
 * A collection of arguments for invoking getSites.
 */
export interface GetSitesOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
