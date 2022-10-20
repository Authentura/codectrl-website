<svelte:head>
    <title>CodeCTRL | Download</title>
</svelte:head>

<h1 class="centred">Download CodeCTRL</h1>
<h4 class="centred"><code>1.0.0-beta</code></h4>

<div id="download-section">
    <div id="windows">
        <h2>Windows</h2>
        <div class="button-grid">
            <ul>
                <li>
                    10/11 -
                    <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/CodeCTRL-1.0.0-x86_64.msi"
                        >Download
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="linux">
        <h2>Linux</h2>
        <div class="button-grid">
            <h5>Ubuntu</h5>
            <ul>
                <li>
                    22.04 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl_1.0.0-beta_amd64-ubuntu-jammy-22.04.deb"
                        >Download</a
                    >
                </li>
                <li>
                    20.04 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl_1.0.0-beta_amd64-ubuntu-focal-20.04.deb"
                        >Download</a
                    >
                </li>
            </ul>
            <h5>Debian</h5>
            <ul>
                <li>
                    11 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl_1.0.0-beta_amd64-debian-bullseye-11.deb"
                        >Download</a
                    >
                </li>
                <li>
                    10 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl_1.0.0-beta_amd64-debian-buster-10.deb"
                        >Download</a
                    >
                </li>
            </ul>
            <h5>Fedora</h5>
            <ul>
                <li>
                    36 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl-1.0.0-beta-1.x86_64.fedora-f36.rpm"
                        >Download</a
                    >
                </li>
            </ul>
            <h5>RHEL</h5>
            <ul>
                <li>
                    9 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl-1.0.0-beta-1.x86_64.el9.rpm"
                        >Download</a
                    >
                </li>
                <li>
                    8 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl-1.0.0-beta-1.x86_64.el8.rpm"
                        >Download</a
                    >
                </li>
                <li>
                    7 - <a
                        href="https://s3.eu-west-1.wasabisys.com/authentura-nc-codectrl-releases/1.0.0-beta/codectrl-1.0.0-beta-1.x86_64.el7.rpm"
                        >Download</a
                    >
                </li>
            </ul>
        </div>
    </div>
    <div id="macos">
        <h2>MacOS</h2>
        <h4 class="italic centred">Coming soon...</h4>
    </div>
</div>

<style>
    .centred {
        text-align: center;
        margin: 0.2em;
    }

    #download-section {
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }

    #download-section > div {
        display: inline-flex;
        flex-direction: column;
        padding: 0 2em 0 2em;
    }

    #download-section > div > h2 {
        text-align: center;
        width: 100%;
        margin: 0;
    }

    #download-section > div > * {
        display: block;
    }

    .button-grid {
        display: grid !important;
        grid-auto-flow: row;
        grid-gap: 0.2em;
        max-width: 100%;
    }

    .button-grid > h5 {
        margin: 0;
    }

    .italic {
        font-style: italic;
        color: var(--grey);
    }

    @media only screen and (max-width: 550px) {
        #download-section {
            display: flex;
            flex-direction: column;
            max-height: unset;
            overflow-y: unset;
        }

        #download-section > div {
            display: block;
            flex-direction: columns;
            padding: auto auto;
        }

        .button-grid {
            grid-gap: 0.2em;
        }
    }
</style>
