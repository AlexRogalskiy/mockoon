---
title: HTTPS mode
icon: lock
meta:
  title: Serve a mock API over TLS
  description: Need to mock a secured API? Mockoon can also do this!
---

## HTTPS mode

---

Mockoon supports serving your API over TLS. You can activate this option for each environment independently:

Open the **Environment Settings** by clicking on the cog in the upper right corner:

![click on cog icon](/images/docs/open-settings.png)

Enable the **HTTPS option** by ticking the checkbox. The option was successfully activated if a yellow lock is displayed next to the environment name.

![tick the HTTPS checkbox](/images/docs/enable-https.png)

You need to restart the environment for the change to take effect.

Your environment will now be available on `https://localhost:port` instead of `http://localhost:port`.

Please note that Mockoon is using a self-signed certificate to serve your environment over TLS.
