import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const allCompanies = [
  { name: "NEO SOFT CANADA INC.", location: "Toronto, Ontario" },
  { name: "0966976 B.C. Ltd DBA The Drake Restaurant", location: "Victoria" },
  { name: "TRILLIUM TRUCK REPAIRS INC.", location: "Mississauga, ON" },
  { name: "NAMCO", location: "Edmonton, AB T6E 6N9" },
  { name: "H1 CONTRACTING INC.", location: "Brampton, ON" },
  { name: "HAKIM OPTICAL LABORATORY LIMITED", location: "Scarborough, ON" },
  { name: "SUNRISE FARMS", location: "Surrey, BC" },
  { name: "INFINITE IT SOLUTIONS", location: "Ottawa, ON" },
  { name: "MAPLE LEAF FOODS", location: "Winnipeg, MB" },
  { name: "WESTJET AIRLINES LTD.", location: "Calgary, AB" },
  { name: "TECHMASTERS INC.", location: "Regina, SK" },
  { name: "MONTREAL SOFTWARE HUB", location: "Montreal, QC" },
  { name: "TERRA LOGISTICS", location: "Hamilton, ON" },
  { name: "NORTHERN BUILDERS", location: "Yellowknife, NT" },
  { name: "PACIFIC INNOVATIONS", location: "Vancouver, BC" },
  { name: "ALBERTA MECHANICAL WORKS", location: "Red Deer, AB" },
  { name: "ROCKET DIGITAL", location: "Kitchener, ON" },
  { name: "FUTURE TECH SYSTEMS", location: "Markham, ON" },
  { name: "CANADA WIDE SERVICES", location: "Saskatoon, SK" },
  { name: "CLOUDCORE INC.", location: "Halifax, NS" },
  { name: "GLOBE TELECOM SOLUTIONS", location: "St. John's, NL" },
  { name: "NORTH PEAK CONSTRUCTION", location: "Barrie, ON" },
  { name: "EASTERN GREEN PROJECTS", location: "Charlottetown, PE" },
  { name: "CENTURY AUTOMATION LTD.", location: "London, ON" },
  { name: "PLATINUM HR SOLUTIONS", location: "Windsor, ON" },
  { name: "EMPIRE SOFTWARE INC.", location: "Waterloo, ON" },
  { name: "OCEAN VIEW CONSULTANTS", location: "Victoria, BC" },
  { name: "GENESIS INDUSTRIAL SERVICES", location: "Kelowna, BC" },
  { name: "MAPLE RIDGE TRUCKING", location: "Lethbridge, AB" },
  { name: "QUANTUM DATA SOLUTIONS", location: "Guelph, ON" },
  { name: "CANADIAN CLEAN TECH", location: "Fredericton, NB" },
  { name: "HORIZON BUILDERS LTD.", location: "Saint John, NB" },
  { name: "PRIME EDUCARE SYSTEMS", location: "Burlington, ON" },
  { name: "NOVA DIGITAL NETWORKS", location: "Richmond, BC" },
  { name: "TRUE NORTH FOODS", location: "Brandon, MB" },
  { name: "ARCTIC INFOTECH", location: "Whitehorse, YT" },
  { name: "PROSPERITY FINANCIAL INC.", location: "Etobicoke, ON" },
  { name: "UNITY CONSTRUCTION GROUP", location: "Milton, ON" },
  { name: "PINNACLE HEALTHCARE", location: "Sudbury, ON" },
  { name: "ECO BUILD CANADA", location: "Thunder Bay, ON" },
  { name: "ZEUS SECURITY SOLUTIONS", location: "Mississauga, ON" },
  { name: "CANADA RECYCLING INC.", location: "Burnaby, BC" },
  { name: "STELLAR EVENTS CO.", location: "Saskatoon, SK" },
  { name: "MAPLE EDGE ENTERPRISES", location: "North York, ON" },
  { name: "DELTA SOLAR TECH", location: "Chilliwack, BC" },
  { name: "FUSION DIGITAL GROUP", location: "Pickering, ON" },
  { name: "GREAT NORTH ENERGY", location: "Fort McMurray, AB" },
  { name: "RAINBOW CAFE GROUP", location: "Niagara Falls, ON" },
  { name: "SUREPATH TRAVEL", location: "Moncton, NB" },
  { name: "KRAKEN ENGINEERING INC.", location: "Cambridge, ON" },
];

const AllCompanies = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">All Registered Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCompanies.map((company, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-gray-900">{company.name}</h3>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <FaMapMarkerAlt className="mr-2 text-gray-400" />
              {company.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCompanies;
