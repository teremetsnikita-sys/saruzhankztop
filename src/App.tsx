/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RFQProvider } from "./context/RFQContext";
import { Home } from "./views/Home";
import { SeriesView } from "./views/SeriesView";
import { ServiceView } from "./views/ServiceView";
import { ContactsView } from "./views/ContactsView";
import { AboutView } from "./views/AboutView";
import { RFQView } from "./views/RFQView";
import { Catalog } from "./views/Catalog";
import { ServiceDetailView } from "./views/ServiceDetailView";
import { PartnersView } from "./views/PartnersView";
import { PartnerDetailView } from "./views/PartnerDetailView";
import { IndustryView } from "./views/IndustryView";
import { CrossReferenceView } from "./views/CrossReferenceView";
import { RequestForm } from "./views/RequestForm";
import { CatalogView } from "./views/CatalogView";
import { NotFound } from "./views/NotFound";

export default function App() {
  return (
    <RFQProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:familySlug" element={<Catalog />} />
            <Route path="/catalog/:familySlug/:typeSlug" element={<Catalog />} />
            <Route path="/catalog/:familySlug/:typeSlug/:seriesSlug" element={<SeriesView />} />
            <Route path="/service" element={<ServiceView />} />
            <Route path="/service/:serviceId" element={<ServiceDetailView />} />
            <Route path="/partners" element={<PartnersView />} />
            <Route path="/partners/:partnerSlug" element={<PartnerDetailView />} />
            <Route path="/industries/:industrySlug" element={<IndustryView />} />
            <Route path="/cross-reference" element={<CrossReferenceView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="/rfq" element={<RFQView />} />
            <Route path="/request" element={<RequestForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </RFQProvider>
  );
}
