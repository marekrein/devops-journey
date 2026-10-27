---
title: Going deeper on how software runs in production
description: Why a Java backend engineer is spending 10 hours a week on AWS, infrastructure as code and Kubernetes — and why every step ends with evidence.
date: 2026-10-27
tags: [aws, kubernetes, learning]
excerpt: For 8 years I've built backend systems in Java. The hardest problems often sat just past the code.
draft: false
---

For 8 years I've built backend systems in Java. The code is the part I know best.

But the hardest problems I've worked on often sat just past the code: how a service is deployed, how it's secured, how we see what it's doing, and how fast we can recover when something breaks.

So I'm going deeper on that side, about 10 hours a week:

- AWS the way it's run in production: multi-account, SSO, guard rails, budgets
- Infrastructure as code, rebuilt from scratch on a timer
- Kubernetes on my own hardware: an old laptop and two Raspberry Pi 5s
- Observability, SLOs and restores I've actually timed

One rule: every step ends with evidence — what I built, how I checked it, what broke.

I write the interesting parts here, mostly the failures. The step-by-step versions live under [Runbooks](/runbooks/).
