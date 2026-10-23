---
title: "Oct 2026 — No human uses AWS root"
description: Three AWS accounts, SSO with MFA as the only way in, region guard rails, budgets — and the CLI that printed nothing.
draft: false
sidebar: { order: -202610 }
---

**Goal:** an AWS setup where nobody signs in as root or as an IAM user — the foundation for every later AWS lab.

**Built:** an organization with a management account and two member accounts (`dev`, `prod`) in a `workloads` OU; IAM Identity Center with MFA on every sign-in; two service control policies; a $50 budget with three alerts in each account; three SSO profiles on my Mac.

**Verified:**

- both member accounts report _no root credentials present_;
- zero IAM users in all three accounts, no access keys on my machine;
- an EC2 call to a region I don't use is denied by a service control policy — I made that call on purpose to see it fail.

**Broke and fixed:**

- The CLI returned exit code 0 and printed nothing. The output pager was swallowing it; `--no-cli-pager` proved it, `AWS_PAGER=""` fixed it. My checks now look for expected output, not just a zero exit code.
- My first portal sign-in failed — wrong username, and the password manager filled a password from another AWS login.
- I found a forgotten third guard-rail policy from an earlier attempt, still attached. Exactly the drift Terraform will catch in Stage 2.

**Decision:** the region guard rail applies only to the `workloads` OU; the management account runs nothing but billing, Organizations and SSO.

**Next:** A1 — cross-account roles and least privilege.

Runbook: [A0 — An AWS organization nobody logs into as root](/runbooks/aws/a0-aws-organization/)
