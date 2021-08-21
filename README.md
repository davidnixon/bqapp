# bqapp

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy to IBM cloud with custom domain

- ibmcloud cf create-domain ORG example.com
- ibmcloud account domain-cert-add example.com -c fullchain.pem -k privkey.pem
- ibmcloud cf create-route dev example.com --hostname www
- ibmcloud cf map-route APP example.com --hostname www
- [add CNAME recod to your DNS](https://cloud.ibm.com/docs/cloud-foundry-public?topic=cloud-foundry-public-custom-domains)
