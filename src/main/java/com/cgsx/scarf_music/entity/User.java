package com.cgsx.scarf_music.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 8615073248717693891L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    private String imgUri;

    private String password;

    private String email;

    private Integer sex;

    @Temporal(TemporalType.DATE)
    private Date birthday;

    private String qq;

    /**
     * 听歌次数
     */
    private Integer listenTimes;

    /**
     * 登录次数
     */
    private Integer loginTimes;

    /**
     * 收藏的歌单
     */
    private String songSheetStr;


    /**
     * 该用户拥有的角色
     */
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "userRole", joinColumns = {@JoinColumn(name = "userId")},
    inverseJoinColumns = @JoinColumn(name = "roleId"))
    private List<Role> roleList;

    /**
     * 收藏，喜欢的歌曲
     */
//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "userSong",joinColumns = {@JoinColumn(name = "userId")},
//    inverseJoinColumns = @JoinColumn(name = "songId"))
//    private List<Song> songList1 = new ArrayList<>();

//    /**
//     * 创建的歌单
//     */
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<SongSheet> songSheets = new ArrayList<>();

    /**
     * 创建的歌单
     */
    @Transient
    private List<SongSheet> songSheets = new ArrayList<>();

//    /**
//     * 收藏的歌单
//     */
//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "userSongSheet", joinColumns = {@JoinColumn(name = "userId")},
//    inverseJoinColumns = {@JoinColumn(name = "songSheetId")})
//    private List<SongSheet> songSheetList = new ArrayList<>();

    /**
     * 关注的歌手
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "userSinger", joinColumns = {@JoinColumn(name = "userId")},
    inverseJoinColumns = {@JoinColumn(name = "singerId")})
    private List<Singer> singerList = new ArrayList<>();

    public User(String username, String password, String email) {
    }
}
