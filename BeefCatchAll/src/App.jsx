import React from 'react'

const BRAND = {
  // Use lowercase for public asset paths for best cross-platform compatibility
  logoUrl: '/btcatchalllogo.png',
  logoLink: 'https://btcatchall.ai',
}

const COLUMN_GROUPS = [
  {
    title: 'Column 1',
    categories: [
      { key: 'drones', label: 'Drones' },
      { key: 'gps', label: 'GPS/Tags' },
      { key: 'virtual-fencing', label: 'Virtual fencing' },
    ],
  },
  {
    title: 'Column 2',
    categories: [
      { key: 'equipment', label: 'Equipment' },
      { key: 'fintech', label: 'Fintech & Ranch Management Firms' },
    ],
  },
  {
    title: 'Column 3',
    categories: [
      { key: 'blockchain', label: 'Blockchain' },
      { key: 'animal-health', label: 'Animal health' },
      { key: 'genetics', label: 'Genetics' },
    ],
  },
]

const SAMPLE_VENDORS = {
  drones: [
    { name: 'BeeFree Agro', url: 'https://beefreeagro.com' },
    { name: 'Cargill CattleView', url: 'https://cargill.com/story/cattle-view' },
    { name: 'ZenaDrone', url: 'https://zenadrone.com' },
    { name: 'DSLRPros', url: 'https://dslrpros.com' },
    { name: 'Drone-Hand', url: 'https://drone-hand.com' },
    { name: 'DJI Agriculture', url: 'https://ag.dji.com' },
    { name: 'Wildlife Drones', url: 'https://wildlifedrones.net' },
    { name: 'GAO RFID', url: 'https://gaorfid.com' },
    { name: 'Advexure', url: 'https://advexure.com' },
    { name: 'FlyGuys', url: 'https://flyguys.com' },
  ],
  gps: [
    { name: '701x', url: 'https://701x.com' },
    { name: 'LoneStar Tracking', url: 'https://lonestartracking.com' },
    { name: 'mOOvement', url: 'https://moovement.com.au' },
    { name: 'Ceres Tag', url: 'https://cerestag.com' },
    { name: 'Fitcows', url: 'https://fitcows.com' },
    { name: 'Chipsafer', url: 'https://chipsafer.com' },
    { name: 'Digital Matter', url: 'https://digitalmatter.com' },
    { name: 'Smart Paddock', url: 'https://smartpaddock.com' },
    { name: 'Abeeway', url: 'https://abeeway.com' },
    { name: 'GlobalSat', url: 'https://embeddedworks.net/product/sens707/' },
  ],
  'virtual-fencing': [
    { name: '701x', url: 'https://701x.com' },
    { name: 'Vence', url: 'https://merck-animal-health-usa.com/species/cattle/vence' },
    { name: 'Nofence', url: 'https://nofence.no' },
    { name: 'Halter', url: 'https://halterhq.com' },
    { name: 'eShepherd (Gallagher)', url: 'https://am.gallagher.com/en/Solutions/eShepherd' },
  ],
  equipment: [
    { name: 'Arrowquip', url: 'https://arrowquip.com' },
    { name: 'Moly Manufacturing', url: 'https://molymfg.com' },
    { name: 'Priefert', url: 'https://priefert.com' },
    { name: 'Powder River', url: 'https://powderriver.com' },
    { name: 'For-Most', url: 'https://zeitlow.com' },
    { name: 'Real-Tuff', url: 'https://realtuff.com' },
    { name: 'Tarter', url: 'https://tarterusa.com' },
    { name: 'IAE', url: 'https://iae.co.uk' },
    { name: 'Sioux Steel', url: 'https://siouxsteel.com' },
    { name: 'John Deere', url: 'https://deere.com' },
    { name: 'Case IH', url: 'https://caseih.com' },
    { name: 'Caterpillar', url: 'https://cat.com' },
    { name: 'AGCO (Massey Ferguson)', url: 'https://agcocorp.com' },
  ],
  'animal-health': [
    { name: 'Zoetis', url: 'https://zoetis.com' },
    { name: 'Merck Animal Health', url: 'https://merck-animal-health-usa.com' },
    { name: 'Elanco', url: 'https://elanco.com' },
    { name: 'Boehringer Ingelheim', url: 'https://bi-animalhealth.com' },
    { name: 'Axiota', url: 'https://axiota.com' },
    { name: 'Animal Health International', url: 'https://animalhealthinternational.com' },
    { name: 'MWI Animal Health', url: 'https://mwiah.com' },
    { name: 'Phibro', url: 'https://pahc.com' },
    { name: 'Santa Cruz Animal Health', url: 'https://scahealth.com' },
    { name: 'PBS Animal Health', url: 'https://pbsanimalhealth.com' },
    { name: 'Valley Vet Supply', url: 'https://valleyvet.com' },
    { name: 'Heartland Vet Supply', url: 'https://heartlandvetsupply.com' },
  ],
  fintech: [
    { name: 'RanchVision', url: 'https://ranchvision.com' },
    { name: 'Farmbrite', url: 'https://farmbrite.com' },
    { name: 'Bushel Farm', url: 'https://bushelfarm.com' },
    { name: 'FarmRaise', url: 'https://farmraise.com' },
    { name: 'FINPACK', url: 'https://finpack.umn.edu' },
    { name: "Farmer's Wallet", url: 'https://play.google.com/store/apps/details?id=com.bivatec.farmerswallet' },
    { name: 'Agri-Access', url: 'https://agri-access.com' },
    { name: 'CattleMax', url: 'https://cattlemax.com' },
    { name: 'Breedr', url: 'https://breedr.co' },
    { name: 'Abecas Insight', url: 'https://argosoftware.com/solutions/agribusiness-software-for-growers/farm-management/' },
    { name: 'Fintech Farm', url: 'https://fintech-farm.com' },
    { name: 'Pasture.io (MyFarm)', url: 'https://pasture.io' },
    { name: 'Farmonaut', url: 'https://farmonaut.com' },
  ],
  'management-software': [],
  blockchain: [
    { name: 'e-Livestock', url: 'https://e-livestock.com', bannerUrl: '/elg_banner_2025.avif' },
    { name: 'AgriBlockChain', url: 'https://agriblockchain.com' },
    { name: 'BeefChain', url: 'https://beefchain.com' },
  ],
  genetics: [
    { name: 'ABS Global', url: 'https://absglobal.com' },
    { name: 'GENEX', url: 'https://genex.coop' },
    { name: 'Select Sires', url: 'https://selectsires.com' },
    { name: 'Alta Genetics', url: 'https://us.altagenetics.com' },
    { name: 'ST Genetics', url: 'https://stgen.com' },
    { name: 'VikingGenetics', url: 'https://vikinggenetics.us' },
    { name: 'Zoetis', url: 'https://beefgenetics.com' },
    { name: 'Vytelle', url: 'https://vytelle.com' },
    { name: 'Peak Genetics', url: 'https://peakgenetics.com' },
    { name: 'SEK Genetics', url: 'https://sekgenetics.com' },
    { name: 'Premier Select Sires', url: 'https://premierselectsires.com' },
    { name: 'Hendrix Genetics', url: 'https://hendrix-genetics.com' },
    { name: 'Trans Ova Genetics', url: 'https://transova.com' },
    { name: 'Neogen', url: 'https://neogen.com' },
    { name: 'Jorgensen Farms', url: 'https://jorgensenfarms.com' },
    { name: 'Premium Beef Genetics', url: 'https://premiumbeefgenetics.com' },
  ],
  'bt-advisors': [
    { name: 'Global Beef Consultants', url: 'https://globalbeefllc.com' },
    { name: 'Gira', url: 'https://girafood.com' },
    { name: 'Alltech', url: 'https://alltech.com' },
    { name: 'Royal De Heus', url: 'https://deheus.com' },
    { name: 'Trouw Nutrition', url: 'https://trouwnutrition.com' },
    { name: 'Farrelly Mitchell', url: 'https://farrellymitchell.com/livestock-consulting' },
    { name: 'Orrani Consulting', url: 'https://orrani.com/key-sectors/meat-and-poultry' },
    { name: 'Great Plains Livestock Consulting', url: 'https://greatplainslivestockconsulting.com' },
    { name: 'IMI Global', url: 'https://imiglobal.com' },
    { name: 'Global Roundtable for Sustainable Beef (GRSB)', url: 'https://grsbeef.org' },
    { name: 'Oklahoma Beef Consultants', url: 'https://okbeefconsultants.com' },
  ],
  'bt-think-tank': [
    { name: 'Texas A&M University', url: 'https://animalscience.tamu.edu/research/beef-cattle/' },
    { name: 'University of Nebraska–Lincoln', url: 'https://beef.unl.edu/research/' },
    { name: 'Oklahoma State University', url: 'https://extension.okstate.edu/programs/beef-extension/beef-cattle-research-updates/' },
    { name: 'Colorado State University', url: 'https://agsci.colostate.edu/ansci/research/beef-management-systems/' },
    { name: 'Iowa State University', url: 'https://www.cals.iastate.edu/' },
    { name: 'University of Florida', url: 'https://ifas.ufl.edu/' },
    { name: 'University of Georgia', url: 'https://animaldairy.uga.edu/' },
    { name: 'Texas Tech University', url: 'https://www.ttu.edu/' },
    { name: 'South Dakota State University', url: 'https://www.sdstate.edu/' },
    { name: 'Montana State University', url: 'https://www.montana.edu/' },
    { name: 'UC Davis', url: 'https://www.ucdavis.edu/' },
    { name: 'Kansas State University', url: 'https://www.k-state.edu/' },
    { name: 'University of Kentucky', url: 'https://www.uky.edu/' },
    { name: 'North Carolina State University', url: 'https://www.ncsu.edu/' },
    { name: 'Mississippi State University', url: 'https://www.msstate.edu/' },
    { name: 'Louisiana State University', url: 'https://www.lsu.edu/' },
    { name: 'University of Missouri', url: 'https://missouri.edu/' },
    { name: 'Purdue University', url: 'https://purdue.edu/' },
    { name: 'University of Illinois Urbana-Champaign', url: 'https://illinois.edu/' },
    { name: 'Michigan State University', url: 'https://msu.edu/' },
  ],
  'bt-update': [
    { name: 'University of Nebraska–Lincoln / USDA-ARS / University of Kentucky — PNAS Nexus (2023): "First gene-edited calf with reduced susceptibility to a major viral pathogen"', url: 'https://pubmed.ncbi.nlm.nih.gov/37181049/' },
    { name: 'University of Nebraska–Lincoln / USDA-ARS — Viruses (2025): "CD46 Gene Editing Confers Ex Vivo BVDV Resistance in Fibroblasts from Cloned Angus Calves"', url: 'https://pubmed.ncbi.nlm.nih.gov/40573367/' },
    { name: 'University of Tennessee — M.S. Thesis (2025): "CRISPR/Cas9 editing of IGF2 and MSTN to enhance productivity"', url: 'https://trace.tennessee.edu/utk_gradthes/14494' },
  ],
}

const YOUTUBE_OF_WEEK = {
  title:
    "Allan Savory: How to green the world's deserts and reverse climate change (TED)",
  youtubeId: 'vpTHi7O66pI',
}
const BT_Tube = {
  title:
    "Cattle Are Getting High Tech GPS Fencing",
  youtubeId: 'huaJuq5ZxPc',
}
const Tech_Tube = {
  title:
    "How technology is helping solve farming’s biggest issues | WOOD TV8",
  youtubeId: 'EZ77aLYlXco',
}

// Use this constant to control the search param for the YouTube video
const SEARCH_YOUTUBE_ID = 'yt';

function getYouTubeId() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get(SEARCH_YOUTUBE_ID);
    if (fromQuery) {
      localStorage.setItem('ytPick', fromQuery);
      return fromQuery;
    }
    const saved = localStorage.getItem('ytPick');
    return saved || YOUTUBE_OF_WEEK.youtubeId;
  } catch (e) {
    return YOUTUBE_OF_WEEK.youtubeId;
  }
}

export default function BTCatchallCraigslistAll() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href={BRAND.logoLink} className="flex items-center gap-3">
            <img src={BRAND.logoUrl} alt="BTCatchall.ai" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold">BTCatchall.ai</h1>
              <p className="text-xs text-gray-600">Beef Tech Vendors and Research - clean and fast</p>
            </div>
          </a>
          <nav className="flex flex-wrap gap-3 text-sm">
            <a href="#bt-advisors" className="px-3 py-1 rounded-full border bg-white hover:bg-gray-50">BT Advisors</a>
            <a href="#bt-think-tank" className="px-3 py-1 rounded-full border bg-white hover:bg-gray-50">BT Think Tank</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Vendor Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMN_GROUPS.map((group) => (
            <div key={group.title} className="space-y-8">
              {group.categories.map((c) => (
                <section id={`cat-${c.key}`} key={c.key}>
                  <h2 className="text-lg font-semibold mb-2">{c.label}</h2>
                  {c.key === 'blockchain' && SAMPLE_VENDORS.blockchain[0]?.bannerUrl && (
                    <div className="mb-4">
                      <a href={SAMPLE_VENDORS.blockchain[0].url} target="_blank" rel="noopener noreferrer">
                        <img
                          src={SAMPLE_VENDORS.blockchain[0].bannerUrl}
                          alt="e-Livestock banner"
                          className="w-full max-w-2xl border rounded"
                        />
                      </a>
                    </div>
                  )}
                  <ul className="space-y-2 text-[15px]">
                    {(SAMPLE_VENDORS[c.key] || []).map((v) => (
                      <li key={`${c.key}-${v.name}`}>
                        <div className="flex flex-col">
                          <a
                            href={v.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-700 hover:underline"
                          >
                            {v.name}
                          </a>
                          <span className="text-gray-600 break-all">{v.url}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ))}
        </div>

        {/* YouTube Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-4 border rounded-md overflow-hidden">
            <div className="p-3 text-sm font-semibold border-b">BT Tube</div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${BT_Tube.youtubeId}`}
                title={BT_Tube.title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-3 text-sm text-gray-700">{BT_Tube.title}</div>

            <div className="p-3 text-sm font-semibold border-b">Tech Tube</div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${Tech_Tube.youtubeId}`}
                title={Tech_Tube.title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-3 text-sm text-gray-700">{Tech_Tube.title}</div>
          </div>
        </aside>
      </main>

      {/* BT Update */}
      <section id="bt-update" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-lg font-semibold mb-2">BT Update - Crispr</h2>
        <p className="text-sm text-gray-600 mb-3">Latest research updates from leading institutions.</p>
        <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 text-[15px]">
          {(SAMPLE_VENDORS['bt-update'] || []).map((item) => (
            <li key={item.url} className="py-2">
              <div className="flex flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {item.name}
                </a>
                <span className="text-gray-600 break-all">{item.url}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* BT Advisors */}
      <section id="bt-advisors" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-lg font-semibold mb-2">BT Advisors</h2>
        <p className="text-sm text-gray-600 mb-3">Tech advisors to help ranchers up their tech game.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[15px]">
          {(SAMPLE_VENDORS['bt-advisors'] || []).map((item) => (
            <li key={item.url} className="py-2">
              <div className="flex flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {item.name}
                </a>
                <span className="text-gray-600 break-all">{item.url}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* BT Think Tank */}
      <section id="bt-think-tank" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-lg font-semibold mb-2">BT Think Tank</h2>
        <p className="text-sm text-gray-600 mb-3">Curated links from the top state land‑grant universities and institutions.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[15px]">
          {(SAMPLE_VENDORS['bt-think-tank'] || []).map((item) => (
            <li key={item.url} className="py-2">
              <div className="flex flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {item.name}
                </a>
                <span className="text-gray-600 break-all">{item.url}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
