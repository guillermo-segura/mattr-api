# MATTR Technical Challenge
Demo to issue a Personal Verifiable Credential and send it to a MATTR wallet.

## General Structure
As I have no experience with Node.JS, I've followed some of the conventions I used to use when working with Laravel:

- `credentialController` to handle the requests received by the API and return a response to the View.
- `issueCredentialUseCase` to encapsulate the business logic related to issuing a Personal Verifiable Credential, allowing it to be reuse and have behave consistently wherever it is called.
- `credentialRepository` interface used to create a separation of concerns between the business logic and the MATTRVII service. This allows us to update or even replace the service with a different one while keeping the business logic intact as it doesn't care of how things are done in the background.
- `mattrVIIService` makes use of the `mattrApi` and it contains the MATTR API endpoints that we use to make the different transactions.
- `mattrApi` Axios instance dedicated to handle MATTR API requests. It includes the base url and also an interceptor to authenticate the user before any request is sent. The logic was extracted from the last step of the [Postman configuration seen in this link](https://github.com/mattrglobal/sample-apps/tree/master/postman)

## Resources used
- [Tenant Setup](https://learn.mattr.global/tutorials/tenant-management/tenant-setup)
- [Create a Web Credential](https://learn.mattr.global/tutorials/create/web-credentials/basic)
- [Encrypt a Credential](https://learn.mattr.global/tutorials/offer/direct/encrypt)
- [Share an Encrypted Credential](https://learn.mattr.global/tutorials/offer/direct/send)
- [MATTR API Reference](https://learn.mattr.global/api-reference/latest)
- [Issue a Basic Credential Example](https://github.com/mattrglobal/sample-apps/blob/master/implementation-patterns/direct-issuance.ts)
  - Useful to fix 2 issues I had:
    - Realising that `keyAgreement` was of type `Array` and not `Object` in order to get `senderDidUrl` correctly
    - Finding out that the issuer didn't have to be a DID of type `web` exclusively. Trying to use a web DID led me to a 400 - Bad Request with no error message.
- [MATTR Contact Form](https://mattr.global/contact)
  - Used as inspiration for the Optional FE challenge
- Postman
- ChatGPT
- VSCode

## Final Thoughts
Overall, it's been a fun project to work on. The initial setup was very simple although I found some parts of the documentation to be outdated; I tried creating a pull requests but I lack permissions to push a branch to remote. If you were to give me temporary permissions, I could push a branch with the updated README.md file alongside the Postman ENV file and Collection file.

I was blocked for a while trying to sign a certificate using a web DID as issuerDid until I realised that I could use a key DID too thanks to this comment: `3. ISSUER_DID -> DID of the Issuer from the same TENANT_DOMAIN`. The only way the DID would belong to the same `TENANT_DOMAIN` was if it was a key DID, or at least that's my understanding. Once I tried that, the problem was gone. After that it was mostly code cleanup. I'm happy to say that I only used the GitHub repository _after_ I finished the challenge to compare my work against it and to confirm if my approach made sense. I noticed that the approach used in the repository is much more class-based compared to my functional approach. I believe this is due to my React background and unfamiliarity with Node.JS best practices.

As for the test coverage, I did try to include some basic unit tests but I couldn't mock the asyncronous parts correctly so I've skipped them for now. If by the time of the review they've been added, it means I had some time to dig deeper on why they're not working as expected. I mentioned in our initial catchup that I was travelling to Spain the week of the 25th of March, so that's why I thought it'd be good to give you visibility in the work done so far.

While I was blocked with the problem I mentioned above, I worked on the optional UI challenge: I took some inspiration from the MATTR website and played with TailwindCSS until I got to something simple yet functional. There's many things that could be added to it: error handling, success and error notifications, debounced onChange inputs to prevent unecessary renders, and so on. However, even if there's no deadline, I still wanted to timebox the FE work.

Before finding a solution for the issue with the web DID, the approach I had in mind was to implement everything as if the response was sucessful, mock some response data if necessary, and cover the whole end-to-end process of issuing and sending a credential to a wallet. Luckily, that's not needed anymore!

Despite my visit to Spain, I'm still fully available for the next steps. If you have any question, please reach out to me and I'll do my best to come back to you as soon as possible.