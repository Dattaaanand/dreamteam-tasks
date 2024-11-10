###ssh bandit0@bandit.labs.overthewire.org -p 2220

- Level 00-->01 : **bandit0**
- Level 01-->02 : **ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If**  // got it just by ls. b
- Level 02-->03 : **263JGJPfgU6LtdEvgfWU1XP5yac29mFx**  // got by executing "-" file (cat ./-).
- Level 03-->04 : **MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx**  // "cat spaces\ in\ this\ filename" or give directory name in quotes.
- Level 04-->05 : **2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ**  // "cat ...Hiding-From-You".
- Level 05-->06 : **4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw**  // used "file ./*" then found file07 has ASCII text. "cat ./-file07".
- Level 06-->07 : **HWasnPhtq9AVKe0dmk45nxy20cvUa6EG**  // find . -type f -size 1033c ! -executable -exec file {} + | grep "ASCII text" 

                The command ! -executable -exec file {} + in find has two parts:
                ! -executable:
                    The ! operator negates the condition that follows, so ! -executable means "find files that are not executable."
                    This filters out any files that have executable permissions, leaving only files that are not executable.
                -exec file {} +:
                    The -exec option in find allows you to execute a command on each file that matches the search criteria.
                    file {} tells find to run the file command on each file ({} is replaced by each file's name).
                    The + at the end makes find pass all matching files to file in a single batch, which is faster than running file individually on each file.
                So together, ! -executable -exec file {} + means "find all non-executable files and check their file types in one go."
                This is useful in your scenario because it narrows down to human-readable files by combining it with grep "ASCII text".

- Level 07-->08 : **morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj**  // find / -type f -size 33c -group bandit6 -user bandit7 2>/dev/null 
                                          // Found file location and then cat /var/lib/dpkg/info/bandit7.password
                                         
- Level 08-->09 : **dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc**  // grep "millionth" data.txt  As its said its next to the word millionth.
- Level 09-->10 : **4CKMh1JI91bUIZZPXDqGanal4xvAg0JM**  // sort data.txt | uniq -u  As it is the only unique data. 
- Level 10-->11 : **FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey**  // strings data.txt | grep "==="
- Level 11-->12 : **dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr**  // base64 -d data.txt  gives the password as it is base64 encoded.
- Level 12-->13 : **7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4**  // use cat to get rot13 code... used online tools to decrypt rot13.
- Level 13-->14 : **FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn**  // Started with copying data.txt to /tmp/temp directory, then decoded the hexdump using "xxd -r data.txt data.out" .
            Then used file data.out to check type, then used changed it to .gz file and decrypted using gzip, then again using bzip2 until I got Tar executable files.
            Then used "tar -xf filename" and kept cheking file type and used gzip until i got ASCII text.

- Level 14-->15 : **MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS**  // used ssh bandit14@localhost -p 2220 -i sshkey.private  and opened bandit14 with localhost..
                                          And then cat /etc/bandit_pass/bandit14
                                          
- Level 15-->16 : **8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo**  // used nc localhost 30000 as its given port is 30000. And then entered password of lev14.
- Level 16-->17 : **kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx**  // openssl s_client -connect localhost:30001  and then enter password of lev15.
- Level 17-->18 :  // nmap localhost -p 31000-32000
                   // The right port is 31790. ncat --ssl localhost 31790 . Then entered password of bandit16 and got the rsa private key. 
                   // Then i created a file in rsa.private /tmp and stored it. nano rsa.private and copied the rsa key. then chmod 400 rsa.private to make it readable for owner. 
                   //  ssh -i rsa.private bandit17@local -p 2220  and then i got into bandit 17.

- Level 18-->19 : **x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO** // there are 2 files password.new and passwords.old .. so the only change is in the password. so i used 
                                         // diff passwords.old passwords.new and got the password.
- Level 19-->20 : **cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8** // ssh bandit18@bandit.labs.overthewire.org -p 2220 cat readme  and entered password of Level 18. 
- Level 20-->21 : **0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO** // la -la  saw that 3rd column shows group and it belongs to bandit20. the file bandit20-do cannot be directly executed by bandit19
                                         // cat /etc/bandit_pass/bandit20  could not be viewed as there was no permission.
                                         // ./bandit20-do cat /etc/bandit_pass/bandit20  and got the password. 
