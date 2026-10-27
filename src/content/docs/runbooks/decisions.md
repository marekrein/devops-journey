---
title: Decisions
description: Why the labs are built the way they are.
sidebar: { order: 2 }
---
Short records of choices that shape the runbooks — what I chose, what I rejected, and what it costs.

| Decision | Choice | Why |
|---|---|---|
| Two tracks | Self-hosted k3s **and** managed AWS/EKS, deliberately with different tools | Running Argo CD *and* Flux, Kyverno *and* Gatekeeper shows what each actually costs |
| One application | The same small Spring Boot service on both tracks | A second app teaches nothing; the comparison is the point |
| Order | AWS first, then Terraform, then Kubernetes on metal, then EKS | Rebuild AWS as code while it's fresh; learn Kubernetes where nothing is hidden |
| Secrets on the homelab | OpenBao instead of HashiCorp Vault | Same API, open-source licence (MPL-2.0) |
| Evidence | Every runbook ends with checks that must pass and a written record | "It applied" isn't evidence; a timed rebuild is |
