"use client";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { LuPencil, LuCreditCard, LuZap } from "react-icons/lu";

const CircularProgress = () => {
  const radius = 7;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * 0.5;
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" className="rotate-[-90deg]">
      <circle cx="9" cy="9" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
      <circle
        cx="9" cy="9" r={radius} fill="none"
        stroke="#199245" strokeWidth="2.5"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const rows = [
  { prompt: "Summarize this document",   category: "NLP",     status: "Done",       statusClass: "bg-green-100 text-green-600",   score: "9.2", progress: "92%", reviewed: "Apr 24" },
  { prompt: "Extract key entities",      category: "NLP",     status: "In review",  statusClass: "bg-yellow-100 text-yellow-600", score: "7.8", progress: "60%", reviewed: "Apr 25" },
  { prompt: "Generate test cases",       category: "Code",    status: "Done",       statusClass: "bg-green-100 text-green-600",   score: "8.5", progress: "85%", reviewed: "Apr 22" },
  { prompt: "Classify sentiment",        category: "NLP",     status: "Pending",    statusClass: "bg-neutral-100 text-neutral-500", score: "—",   progress: "20%", reviewed: "—"      },
  { prompt: "Rewrite in formal tone",    category: "Writing", status: "In review",  statusClass: "bg-yellow-100 text-yellow-600", score: "6.4", progress: "50%", reviewed: "Apr 26" },
  { prompt: "Fix this code snippet",     category: "Code",    status: "Done",       statusClass: "bg-green-100 text-green-600",   score: "9.0", progress: "90%", reviewed: "Apr 23" },
  { prompt: "Translate to Spanish",      category: "i18n",    status: "Pending",    statusClass: "bg-neutral-100 text-neutral-500", score: "—",   progress: "10%", reviewed: "—"      },
];

const ProgressComponent = () => {
  return (
    <div
      className="font-mono flex items-center justify-center w-full h-full bg-[#f6f6f6]"
    >
      <div className="w-[90%] h-[60%] bg-white rounded-tr-xl flex flex-col overflow-hidden">
        <div className="w-full h-[10%] border-b border-[#eeeeee] flex items-center justify-end px-4">
          <AiOutlineQuestionCircle className="text-neutral-400" />
        </div>
        <div className="w-full h-[11%] border-b border-[#eeeeee] flex items-center justify-end px-4">
          <div className="w-28 h-6 border border-[#eeeeee] flex items-center rounded-lg px-1 mr-2 cursor-pointer">
            <LiaCloudUploadAltSolid className="mr-1 mb-0.5 text-neutral-400"/>
            <span className="text-xs">Import keys</span>
          </div>
          <div className="w-28 h-6 border border-[#eeeeee] flex items-center rounded-lg px-1 mr-2 cursor-pointer">
            <FaPlus size={14} className="mr-1 mb-px text-neutral-400"/>
            <span className="text-xs">Add prompts</span>
          </div>
          <div className="w-30 h-6 flex items-center rounded-lg px-1 bg-[#323232] cursor-pointer">
            <LuPencil size={12} className="mx-1 text-neutral-400"/>
            <span className="text-xs ml-0.5 text-white">Suggest more</span>
          </div>
        </div>
        <div className="w-full h-[11%] border-b border-[#eeeeee] flex items-center justify-end px-4">
          <div className="w-26 h-6 bg-[#f9f9f9] rounded-lg flex items-center px-2 justify-between circle-icon cursor-default hover-card-div group relative">
            <CircularProgress />
            <p className="text-xs ml-1">134 <span className="text-neutral-400">/ 356</span></p>

            {/* Hover card */}
            <div className="absolute top-full right-0 z-10 mt-1 w-68 bg-white border border-[#eeeeee] rounded-lg shadow-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="px-3 py-1.5 border-b border-[#eeeeee] flex items-center">
                <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Progress breakdown</p>
              </div>
              <div className="px-3 py-2.5 space-y-2">
                <p className="text-xs text-neutral-500 capitalize">total prompts tracking</p>
                <div className="relative overflow-hidden" style={{ height: '22px', width: 'calc(36 * 7px - 4px)' }}>
                  <div className="absolute inset-y-0 left-0" style={{
                    width: '100%',
                    backgroundImage: 'repeating-linear-gradient(90deg, #e5e7eb 0px, #e5e7eb 3px, transparent 3px, transparent 7px)',
                  }} />
                  <div className="absolute inset-y-0 left-0" style={{
                    width: `calc(${Math.round((134 / 356) * 36)} * 7px - 4px)`,
                    backgroundImage: 'repeating-linear-gradient(90deg, #199245 0px, #199245 3px, transparent 3px, transparent 7px)',
                  }} />
                </div>
              </div>
              <div className="px-3 py-2 border-t border-[#eeeeee] flex items-center gap-2">
                <div className="h-6 border border-[#eeeeee] flex flex-1 items-center justify-center rounded-lg px-1.5 cursor-pointer">
                  <LuCreditCard size={11} className="mr-1 text-neutral-400" />
                  <span className="text-xs">Add credit</span>
                </div>
                <div className="h-6 flex flex-1 items-center justify-center rounded-lg px-1.5 bg-[#323232] cursor-pointer">
                  <LuZap size={11} className="mr-1 text-neutral-400" />
                  <span className="text-xs text-white">Upgrade plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table — zoomed into the right portion, left columns bleed off-screen */}
        <div className="w-full flex-1 overflow-hidden">
          <table className="w-[175%] -ml-[75%] text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#eeeeee] bg-[#f9f9f9]">
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-40 border-r border-[#eeeeee]">Prompt</th>
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-32 border-r border-[#eeeeee]">Category</th>
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-24 border-r border-[#eeeeee]">Status</th>
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-20 border-r border-[#eeeeee]">Score</th>
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-28 border-r border-[#eeeeee]">Progress</th>
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-24 border-r border-[#eeeeee]">Reviewed</th>
                <th className="text-left px-3 py-2 font-medium text-neutral-400 w-20">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-[#eeeeee] hover:bg-[#fafafa]">
                  <td className="px-3 py-2 text-neutral-600 truncate max-w-[160px] border-r border-[#eeeeee]">{row.prompt}</td>
                  <td className="px-3 py-2 text-neutral-500 border-r border-[#eeeeee]">{row.category}</td>
                  <td className="px-3 py-2 border-r border-[#eeeeee]">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${row.statusClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-neutral-600 border-r border-[#eeeeee]">{row.score}</td>
                  <td className="px-3 py-2 border-r border-[#eeeeee]">
                    <div className="w-20 h-1.5 bg-[#eeeeee] rounded-full overflow-hidden">
                      <div className="h-full bg-[#199245] rounded-full" style={{ width: row.progress }} />
                    </div>
                  </td>
                  <td className="px-3 py-2 text-neutral-400 border-r border-[#eeeeee]">{row.reviewed}</td>
                  <td className="px-3 py-2 text-neutral-400 cursor-pointer hover:text-neutral-600">···</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgressComponent;
