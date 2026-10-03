let cG = 'G1';
let cD = 'Mon';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const data = [
    { d: 'Mon', t: '10:00-11:00 AM', ty: 'lecture', g: 'All', c: 'Basic Electrical Engineering', v: 'Room 2', f: 'Mr. Jitendra Kumar', h: 1 },
    { d: 'Mon', t: '12:00-01:00 PM', ty: 'lecture', g: 'All', c: 'Communication Skills', v: 'Room 4', f: 'Mr. Shahid Raza', h: 1 },
    { d: 'Mon', t: '02:00-04:00 PM', ty: 'lab', g: 'G1', c: 'Basic Electrical Engineering Lab', v: 'Electrical Lab', f: 'Mr. Jitendra Kumar', ta: 'Mr. Manish Kumar', h: 2 },
    { d: 'Mon', t: '02:00-04:00 PM', ty: 'lab', g: 'G2', c: 'Engineering Physics Lab', v: 'Physics Lab', f: 'Dr. Mukesh Kumar Pandey', ta: 'Mr. Santu Kumar', h: 2 },
    { d: 'Mon', t: '04:00-05:00 PM', ty: 'lecture', g: 'All', c: 'Communication Skills', v: 'Room 3', f: 'Mr. Shahid Raza', h: 1 },

    { d: 'Tue', t: '10:00-11:00 AM', ty: 'lecture', g: 'All', c: 'Introduction to AI', v: 'Room 2', f: 'Mrs. Priti Kumari', h: 1 },
    { d: 'Tue', t: '11:00-01:00 PM', ty: 'lab', g: 'G1', c: 'Communication Skills Lab', v: 'Language Lab', f: 'Mr. Shahid Raza', ta: 'Mr. Suraj Kumar', h: 2 },
    { d: 'Tue', t: '02:00-03:00 PM', ty: 'lecture', g: 'All', c: 'Engineering Physics', v: 'Room 2', f: 'Dr. Mukesh Kumar Pandey', h: 1 },
    { d: 'Tue', t: '03:00-05:00 PM', ty: 'lab', g: 'G2', c: 'Sports/Yoga/NCC/NSS', v: 'Room 14', f: 'Mr. Sanat', ta: 'Mr. Pradeep Singh', h: 2 },

    { d: 'Wed', t: '11:00-12:00 PM', ty: 'lecture', g: 'All', c: 'Engineering Mathematics-I', v: 'Room 2', f: 'Dr. Matiram Das', h: 1 },
    { d: 'Wed', t: '12:00-01:00 PM', ty: 'lecture', g: 'All', c: 'Basic Electrical Engineering', v: 'Room 2', f: 'Mr. Jitendra Kumar', h: 1 },
    { d: 'Wed', t: '03:00-04:00 PM', ty: 'lecture', g: 'All', c: 'Engineering Mathematics-I', v: 'Room 3', f: 'Dr. Matiram Das', h: 1 },
    { d: 'Wed', t: '04:00-05:00 PM', ty: 'lecture', g: 'All', c: 'Engineering Physics', v: 'Room 3', f: 'Dr. Mukesh Kumar Pandey', h: 1 },

    { d: 'Thu', t: '10:00-11:00 AM', ty: 'lecture', g: 'All', c: 'Introduction to AI', v: 'Room 2', f: 'Mrs. Priti Kumari', h: 1 },
    { d: 'Thu', t: '11:00-12:00 PM', ty: 'lab', g: 'G2', c: 'Programming for Problem Solving Lab', v: 'Language Lab', f: 'Mr. Arun Kumar', ta: 'Mr. Ravi Kumar', h: 1 },
    { d: 'Thu', t: '12:00-01:00 PM', ty: 'lab', g: 'G2', c: 'Programming for Problem Solving Lab', v: 'Project & Simulation Lab', f: 'Mr. Arun Kumar', h: 1 },
    { d: 'Thu', t: '02:00-03:00 PM', ty: 'lecture', g: 'All', c: 'Communication Skills', v: 'Room 4', f: 'Mr. Shahid Raza', h: 1 },
    { d: 'Thu', t: '03:00-05:00 PM', ty: 'lab', g: 'G1', c: 'Sports/Yoga/NCC/NSS', v: 'Room 14', f: 'Mr. Sanat', ta: 'Mr. Pradeep Singh', h: 2 },
    { d: 'Thu', t: '03:00-05:00 PM', ty: 'lab', g: 'G2', c: 'Communication Skills Lab', v: 'Language Lab', f: 'Mr. Shahid Raza', ta: 'Mr. Suraj Kumar', h: 2 },

    { d: 'Fri', t: '10:00-12:00 PM', ty: 'lab', g: 'G1', c: 'Engineering Physics Lab', v: 'Physics Lab', f: 'Dr. Mukesh Kumar Pandey', ta: 'Mr. Santu Kumar', h: 2 },
    { d: 'Fri', t: '12:00-01:00 PM', ty: 'lecture', g: 'All', c: 'Introduction to AI', v: 'Room 2', f: 'Mrs. Priti Kumari', h: 1 },
    { d: 'Fri', t: '03:00-04:00 PM', ty: 'lab', g: 'G1', c: 'Programming for Problem Solving Lab', v: 'Language Lab', f: 'Mr. Arun Kumar', ta: 'Mr. Ravi Kumar', h: 1 },
    { d: 'Fri', t: '03:00-05:00 PM', ty: 'lab', g: 'G2', c: 'Basic Electrical Engineering Lab', v: 'Electrical Lab', f: 'Mr. Jitendra Kumar', ta: 'Mr. Manish Kumar', h: 2 },
    { d: 'Fri', t: '04:00-05:00 PM', ty: 'lab', g: 'G1', c: 'Programming for Problem Solving Lab', v: 'Language Lab', f: 'Mr. Arun Kumar', h: 1 },

    { d: 'Sat', t: '10:00-11:00 AM', ty: 'lecture', g: 'All', c: 'Engineering Physics', v: 'Room 2', f: 'Dr. Mukesh Kumar Pandey', h: 1 },
    { d: 'Sat', t: '11:00-12:00 PM', ty: 'lecture', g: 'All', c: 'Engineering Mathematics-1', v: 'Room 2', f: 'Dr. Matiram Das', h: 1 },
    { d: 'Sat', t: '02:00-03:00 PM', ty: 'lecture', g: 'All', c: 'Basic Electrical Engineering', v: 'Room 2', f: 'Mr. Jitendra Kumar', h: 1 }
];

function iT() {
    document.getElementById('tbs').innerHTML = days.map(d =>
        `<button id="t${d}" onclick="sD('${d}')" class="tab ${d === cD ? 'act' : ''}">${d}</button>`
    ).join('');
}

function sG(g) {
    cG = g;
    document.getElementById('bG1').className = g === 'G1' ? 'act' : '';
    document.getElementById('bG2').className = g === 'G2' ? 'act' : '';
    uV();
}

function sD(d) {
    cD = d;
    days.forEach(day => {
        const t = document.getElementById(`t${day}`);
        if (t) t.className = day === d ? 'tab act' : 'tab';
    });
    uV();
}

function uV() {
    let le = 0;
    let la = 0;

    data.forEach(i => {
        if (i.g === 'All' || i.g === cG) {
            if (i.ty === 'lecture') le += i.h;
            if (i.ty === 'lab') la += i.h;
        }
    });

    document.getElementById('sL').innerText = le + 'h';
    document.getElementById('sB').innerText = la + 'h';
    document.getElementById('sT').innerText = (le + la) + 'h';

    const act = data.filter(i =>
        i.d === cD && (i.g === 'All' || i.g === cG)
    );

    const cont = document.getElementById('lst');

    if (act.length === 0) {
        cont.innerHTML = '<div style="text-align:center;padding:30px;color:#94a3b8;">🎉 No classes!</div>';
        return;
    }

    cont.innerHTML = act.map(i =>
        `<div class="card ${i.ty}">
            <div class="c-top">
                <span class="time">${i.t}</span>
                <span class="bdg ${i.ty}">${i.ty}</span>
            </div>
            <h3 class="title">${i.c}</h3>
            <div class="det">
                <div>📍 ${i.v}</div>
                <div>🧑‍🏫 ${i.f}</div>
                ${i.ta ? `<div>👥 TA: ${i.ta}</div>` : ''}
            </div>
        </div>`
    ).join('');
}

iT();
uV();
