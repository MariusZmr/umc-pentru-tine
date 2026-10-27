const requests = [
  { id: 412, name: "Popescu Maria", quality: "Student UMC", faculty: "FNTN Navigație", program: "An I", category: "Sprijin academic", subcategory: "Orar/discipline", operator: "Elena Ionașcu", status: "În lucru" },
  { id: 411, name: "Ionescu Andrei", quality: "Student UMC", faculty: "FIM IME", program: "An II", category: "Sprijin administrativ", subcategory: "Secretariat", operator: "Mihai Dumitrescu", status: "Nouă" },
  { id: 410, name: "Stan Ana", quality: "Elev", faculty: "—", program: "—", category: "Sprijin de integrare", subcategory: "Admitere", operator: "—", status: "Nouă" },
  { id: 409, name: "Dinu Radu", quality: "Student UMC", faculty: "FENA Electromecanică", program: "An III", category: "Sprijin social și financiar", subcategory: "Burse", operator: "Cristina Pavel", status: "În lucru" },
  { id: 408, name: "Marin Elena", quality: "Elev", faculty: "—", program: "—", category: "Alte solicitări", subcategory: "Voluntariat", operator: "—", status: "Rezolvată" },
];

export default function AdminPanelPage() {
  return (
    <main className="min-h-screen bg-[#eef3fa] p-6 text-slate-800">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <header className="border-b border-slate-200 bg-[#0D2B5E] px-6 py-5 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#f3d995]">CRM UMC</p>
              <h1 className="mt-2 text-2xl font-bold">Panou solicitări studențești</h1>
            </div>
            <div className="text-sm text-slate-200">Elena Ionașcu / Moderator</div>
          </div>
        </header>

        <section className="grid gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5 md:grid-cols-4">
          {[
            { label: "Total solicitări", value: "412" },
            { label: "Noi", value: "18" },
            { label: "În lucru", value: "29" },
            { label: "Rezolvate", value: "365" },
          ].map((item) => (
            <div key={item.label} className="rounded-[18px] border border-slate-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
              <p className="mt-3 text-2xl font-bold text-[#0D2B5E]">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 p-6 xl:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-5 flex flex-wrap gap-3">
              {[
                "Toate (412)",
                "Student UMC (268)",
                "Elev (144)",
                "Noi (18)",
                "În lucru (29)",
                "Rezolvate (365)",
              ].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    tab.includes("Toate") ? "bg-[#0D2B5E] text-white" : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-[22px] border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Nr.</th>
                    <th className="px-4 py-3">Nume și prenume</th>
                    <th className="px-4 py-3">Calitate</th>
                    <th className="px-4 py-3">Categoria</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-semibold text-[#0D2B5E]">#{request.id}</td>
                      <td className="px-4 py-3">{request.name}</td>
                      <td className="px-4 py-3">{request.quality}</td>
                      <td className="px-4 py-3">{request.category}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-[#edf3ff] px-2 py-1 text-xs font-semibold text-[#0D2B5E]">{request.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-[22px] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a843]">Detalii solicitare</p>
            <h2 className="mt-2 text-2xl font-bold text-[#0D2B5E]">#412</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p><strong>Nume:</strong> Popescu Maria</p>
              <p><strong>E-mail:</strong> maria.popescu@umc.ro</p>
              <p><strong>Calitate:</strong> Student UMC</p>
              <p><strong>Facultate:</strong> Facultatea de Navigație și Transport Naval</p>
              <p><strong>Program:</strong> Navigație, hidrografie și echipamente navale</p>
              <p><strong>An:</strong> Anul I</p>
              <p><strong>Categorie:</strong> Sprijin academic</p>
              <p><strong>Subcategorie:</strong> Orar/discipline</p>
            </div>

            <div className="mt-6 rounded-[18px] border border-slate-200 bg-white p-4">
              <h3 className="text-lg font-bold text-[#0D2B5E]">Răspuns către beneficiar</h3>
              <textarea
                className="mt-3 min-h-28 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none"
                defaultValue="Bună ziua, am verificat informațiile legate de orar și vă pot îndruma către cadrul didactic de care aveți nevoie."
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className="rounded-full bg-[#0D2B5E] px-4 py-2 text-sm font-semibold text-white">Trimite răspuns</button>
                <button type="button" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Salvează draft</button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
