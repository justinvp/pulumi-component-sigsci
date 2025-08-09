import * as pulumi from "@pulumi/pulumi";
import * as sigsci from "@pulumi/sigsci";

interface SigSciArgs { }

export class SigSciComponent extends pulumi.ComponentResource {
  constructor(name: string, args: SigSciArgs, opts: pulumi.ComponentResourceOptions) {
    super("joshtest:index:SigSciComponent", name, opts);

    new sigsci.Site("site", {
      displayName: "displayName",
      shortName: "shortName",
    });

    this.registerOutputs({});
  }
}
