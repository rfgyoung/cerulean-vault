/**
 * © 2025 P.C. Interactive. All rights reserved.
 *
 * This file is part of an experimental software package maintained by internal development teams.
 * Use and distribution of this file may be subject to internal review policies.
 *
 * Refer to project documentation or your team lead before sharing externally.
 * 
 * For questions or concerns, contact: vault-admin@corp-pci.net
 */

const config = {
  project: "CeruleanVault",
  releasePhase: "R0.3-beta",

  api: {
    endpoint: "https://api.vault-sandbox.pci-assets.net/v1",
    key: "pk_live_R3DACT3D_but_in_plain_sight",
    retries: 3,
    timeout: 8000,
  },

  assets: {
    bucket: "s3://pci-internal-assets-euw",
    fallbackPath: "/opt/data/cold-storage/cerulean",
  },

  metadata: {
    handler: "k.ketchum",
    reviewer: "m.waterflower",
    repoUrl: "git@vault-git.corp-pci.net:/vault/core.git",
    lastUpdated: "2025-06-12T03:19Z"
  }
};

module.exports = config;
