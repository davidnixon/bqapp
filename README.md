# Barrington Quartet
This is the VueJS code for the Barring Quartet web site which yu can find here: [https://www.barringtonquartet.com](https://www.barringtonquartet.com/)

## Suggestions or issues
[Add issue here](https://github.com/davidnixon/bqapp/issues)


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

### Tech

![ibm cloud](https://img.shields.io/badge/IBM-cloud-blue)
![vue](https://img.shields.io/badge/vue-2.6.1-green)
![carbon](https://img.shields.io/badge/%40carbon%2Fvue-2.39.0-blue)
![nginx 1.21.1](https://img.shields.io/badge/nginx-1.21.1-brightgreen.svg)
![certbot](https://img.shields.io/badge/certbot-automated-brightgreen)
![Lets Encrype](https://img.shields.io/badge/Let's%20Encrypt-protected-green)

## Deploy to IBM cloud with custom domain

```sh
yarn build
cd cf
ibmcloud cf push
```

Other steps:
- ibmcloud cf create-domain ORG example.com
- ibmcloud account domain-cert-add example.com -c fullchain.pem -k privkey.pem
- ibmcloud cf create-route dev example.com --hostname www
- ibmcloud cf map-route APP example.com --hostname www
- [add CNAME record to your DNS](https://cloud.ibm.com/docs/cloud-foundry-public?topic=cloud-foundry-public-custom-domains)
