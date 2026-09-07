/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRANDS } from "../data/mockData";
import { ParkerDetail } from "../components/ParkerDetail";
import { useTranslation } from "react-i18next";

export const PartnerDetailView = () => {
  const { t } = useTranslation();
  const { partnerSlug } = useParams<{ partnerSlug: string }>();
  const brand = BRANDS.find(b => b.slug === partnerSlug);

  if (!brand) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">{t("partners.not_found")}</h1>
        <Link to="/partners" className="text-primary hover:underline mt-4 inline-block">{t("partners.back_to_list")}</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <Link to="/partners" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t("partners.back")}
        </Link>
      </div>
      <ParkerDetail />
    </div>
  );
};
