---
title: Start here
description: Who these runbooks are for, what they cost, and how far you can trust them.
sidebar: { order: 0 }
---
These are the runbooks I use to learn platform engineering: AWS the way it's run in production, Terraform, and Kubernetes on my own hardware. Each one is published only **after I've run it end to end**, with my real results and the things that broke.

## Who they're for

- Developers who know how to build software and want to learn how it's deployed, secured, observed and recovered.
- Anyone preparing for AWS Solutions Architect, Terraform Associate or CKA who wants hands-on labs, not just videos.

You should be comfortable in a terminal and with Git. No prior AWS or Kubernetes experience is assumed.

## Two tracks, one application

| Track | What you build | Main tools |
|---|---|---|
| **AWS** | A multi-account AWS setup, then the same platform as code, then a managed Kubernetes platform | Organizations, IAM Identity Center, VPC, Terraform, EKS, Flux |
| **Homelab** | A Kubernetes cluster on an old laptop and two Raspberry Pi 5s | k3s, Ansible, Cilium, Argo CD, Prometheus |

Both tracks run the same small Java (Spring Boot) service, so you can compare what each platform does for it.

## What it costs

- **AWS:** most runbooks fit the Free Tier or cost a few dollars if you delete everything the same day. Each runbook states its cost and how to clean up. The first runbook sets budget alerts in every account — do it first.
- **Homelab:** hardware you may already have; the Raspberry Pi route is about €450.

## How much to trust them

- Every runbook shows the date I last ran it (**Last verified**). Cloud consoles change; if a button moved, the edit link at the bottom of each page is the fastest way to tell me.
- These are learning labs, not production advice. Real systems need reviews, more accounts and more care.
- You're responsible for what runs in your AWS account. Read the **Clean-up and cost** section before you start a runbook, not after.

## Where to begin

1. Read [How to use a runbook](/how-to-use/) — two minutes.
2. Start with **A0 — An AWS organization nobody logs into as root**. Everything else on the AWS track builds on it.
