import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export interface CorpCloudwafInstanceDeployment {
    dnsEntry: pulumi.Input<string>;
    egressIps: pulumi.Input<pulumi.Input<inputs.CorpCloudwafInstanceDeploymentEgressIp>[]>;
    message: pulumi.Input<string>;
    status: pulumi.Input<string>;
}
export interface CorpCloudwafInstanceDeploymentEgressIp {
    ip: pulumi.Input<string>;
    status: pulumi.Input<string>;
    updatedAt: pulumi.Input<string>;
}
export interface CorpCloudwafInstanceWorkspaceConfig {
    /**
     * Specify the request header containing the client IP address, available when InstanceLocation is set to "advanced". Default: "X-Forwarded-For".
     */
    clientIpHeader?: pulumi.Input<string>;
    /**
     * Set instance location to "direct" or "advanced".
     */
    instanceLocation: pulumi.Input<string>;
    /**
     * Specify the protocol or protocols required. ex. ["http", "https"], ["https"].
     */
    listenerProtocols: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Routes
     */
    routes: pulumi.Input<pulumi.Input<inputs.CorpCloudwafInstanceWorkspaceConfigRoute>[]>;
    /**
     * Site name.
     */
    siteName: pulumi.Input<string>;
}
export interface CorpCloudwafInstanceWorkspaceConfigRoute {
    /**
     * List of certificate IDs in string associated with request URI or domains. IDs will be available in certificate GET request.
     */
    certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If enabled, this will allow open TCP connections to be reused (default: true)
     */
    connectionPooling?: pulumi.Input<boolean>;
    /**
     * List of domain or request URIs, up to 100 entries.
     */
    domains: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Route unique identifier.
     */
    id?: pulumi.Input<string>;
    /**
     * Origin server URI.
     */
    origin: pulumi.Input<string>;
    /**
     * Pass the client supplied host header through to the upstream (including the upstream TLS handshake for use with SNI and certificate validation). If using Heroku or Server Name Indications (SNI), this must be disabled (default: false).
     */
    passHostHeader?: pulumi.Input<boolean>;
    /**
     * If true, will trust proxy headers coming into the agent. If false, will ignore and drop those headers (default: false)
     */
    trustProxyHeaders?: pulumi.Input<boolean>;
}
export interface CorpRuleAction {
    /**
     * signal id
     */
    signal?: pulumi.Input<string>;
    /**
     * (block, allow, addSignal, excludeSignal)
     */
    type: pulumi.Input<string>;
}
export interface CorpRuleCondition {
    /**
     * Conditions
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.CorpRuleConditionCondition>[]>;
    /**
     * types:
     *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
     *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
     */
    field?: pulumi.Input<string>;
    /**
     * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, inList, notInList)
     */
    operator?: pulumi.Input<string>;
    /**
     * (group, multival, single)
     */
    type: pulumi.Input<string>;
    /**
     * type: single - See request fields (https://docs.signalsciences.net/using-signal-sciences/features/rules/#request-fields)
     */
    value?: pulumi.Input<string>;
}
export interface CorpRuleConditionCondition {
    /**
     * Conditions
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.CorpRuleConditionConditionCondition>[]>;
    /**
     * types:
     *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
     *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
     */
    field?: pulumi.Input<string>;
    /**
     * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, inList, notInList)
     */
    operator?: pulumi.Input<string>;
    /**
     * (group, multival, single)
     */
    type: pulumi.Input<string>;
    /**
     * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
     */
    value?: pulumi.Input<string>;
}
export interface CorpRuleConditionConditionCondition {
    /**
     * types:
     *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
     *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
     */
    field?: pulumi.Input<string>;
    /**
     * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, inList, notInList)
     */
    operator?: pulumi.Input<string>;
    /**
     * (group, multival, single)
     */
    type: pulumi.Input<string>;
    /**
     * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
     */
    value?: pulumi.Input<string>;
}
export interface SiteAttackThreshold {
    interval: pulumi.Input<number>;
    threshold: pulumi.Input<number>;
}
export interface SiteIntegrationField {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
export interface SiteRuleAction {
    /**
     * Allows toggling between a non-interactive and interactive browser challenge. Only valid with the 'browserChallenge' action type.
     */
    allowInteractive?: pulumi.Input<boolean>;
    /**
     * URL to redirect to when blocking response code is set to 301 or 302
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * HTTP code agent for agent to respond with. range: 301, 302, or 400-599, defaults to '406' if not provided. Only valid with the 'block' action type.
     */
    responseCode?: pulumi.Input<number>;
    /**
     * signal id to tag
     */
    signal?: pulumi.Input<string>;
    /**
     * (addSignal, allow, block, browserChallenge, dynamicChallenge, excludeSignal, verifyToken) (rateLimit rule valid values: logRequest, blockSignal, browserChallenge, verifyToken)
     */
    type: pulumi.Input<string>;
}
export interface SiteRuleCondition {
    /**
     * Conditions
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.SiteRuleConditionCondition>[]>;
    /**
     * types:
     *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
     *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
     */
    field?: pulumi.Input<string>;
    /**
     * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, matches, doesNotMatch, inList, notInList)
     */
    operator?: pulumi.Input<string>;
    /**
     * (group, multival, single)
     */
    type: pulumi.Input<string>;
    /**
     * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
     */
    value?: pulumi.Input<string>;
}
export interface SiteRuleConditionCondition {
    /**
     * Conditions
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.SiteRuleConditionConditionCondition>[]>;
    /**
     * types:
     *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
     *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
     */
    field?: pulumi.Input<string>;
    /**
     * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, matches, doesNotMatch, inList, notInList)
     */
    operator?: pulumi.Input<string>;
    /**
     * (group, multival, single)
     */
    type: pulumi.Input<string>;
    /**
     * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
     */
    value?: pulumi.Input<string>;
}
export interface SiteRuleConditionConditionCondition {
    /**
     * types:
     *     - single - (scheme, method, path, useragent, domain, ip, responseCode, agentname, paramname, paramvalue, country, name, valueString, valueInt, valueIp, signalType, value, ja3Fingerprint, ja4Fingerprint, protocolVersion)
     *     - multival - (signal, requestHeader, queryParameter, postParameter, requestCookie, responseHeader)
     */
    field?: pulumi.Input<string>;
    /**
     * type: group, multival - Conditions that must be matched when evaluating the request (all, any)
     */
    groupOperator?: pulumi.Input<string>;
    /**
     * type: single - (equals, doesNotEqual, contains, doesNotContain, greaterEqual, lesserEqual, like, notLike, exists, doesNotExist, matches, doesNotMatch, inList, notInList)
     */
    operator?: pulumi.Input<string>;
    /**
     * (group, multival, single)
     */
    type: pulumi.Input<string>;
    /**
     * type: single - See request fields (https://docs.fastly.com/signalsciences/using-signal-sciences/rules/defining-rule-conditions/#fields)
     */
    value?: pulumi.Input<string>;
}
export interface SiteRuleRateLimit {
    /**
     * Client Identifiers
     */
    clientIdentifiers: pulumi.Input<pulumi.Input<inputs.SiteRuleRateLimitClientIdentifier>[]>;
    /**
     * duration in seconds (300 < x < 3600)
     */
    duration: pulumi.Input<number>;
    /**
     * interval in minutes (1, 5, 10)
     */
    interval: pulumi.Input<number>;
    /**
     * threshold
     */
    threshold: pulumi.Input<number>;
}
export interface SiteRuleRateLimitClientIdentifier {
    key?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * (ip, requestHeader, requestCookie, postParameter, signalPayload)
     */
    type: pulumi.Input<string>;
}
export interface SiteTemplatedRuleAlert {
    /**
     * To block requests immediately use (blockImmediate), Threshold level blocking: For logging use (info), for blocking use (template)
     */
    action: pulumi.Input<string>;
    blockDurationSeconds: pulumi.Input<number>;
    enabled: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    interval?: pulumi.Input<number>;
    longName: pulumi.Input<string>;
    skipNotifications: pulumi.Input<boolean>;
    threshold?: pulumi.Input<number>;
}
export interface SiteTemplatedRuleDetection {
    enabled: pulumi.Input<boolean>;
    fields?: pulumi.Input<pulumi.Input<inputs.SiteTemplatedRuleDetectionField>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
export interface SiteTemplatedRuleDetectionField {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
