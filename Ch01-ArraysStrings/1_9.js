const stringRot = (s1, s2) => {
    if( s1.length !== s2.length) return false;
    let s2cat = s2+s2;
    return isSubstring(s2cat,s1);
}

//assume isSubstring is defined
